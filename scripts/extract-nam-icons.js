// Extracts all menu icon PNGs from a NAM install, and pulls the button LTEXT strings from the NAM repo into a data file. The menu-icon shortcode uses the TGI and data file to automatically fill in the icon description.
// Usage: node scripts/extract-nam-icons.js <path-to-nam-plugins>
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { DBPF, FileType } from 'sc4/core';

/**
 * Download and parse the specified poEdit template file to YAML.
 * @returns {Promise<string>} YAML text
 */
async function FetchAndParseButtonLabels(poEditFile) {
    const response = await fetch(poEditFile);
    if (!response.ok) {
        throw new Error(`Failed to fetch buttons.pot: ${response.status} ${response.statusText}`);
    }
    const text = await response.text();
    // super basic parser to convert the pot file to yaml
    const yaml = [];
    const lines = text.split(/\r?\n/);
    for (let idx = 11; idx < lines.length; idx++) { //Skip first 11 header lines
        const line = lines[idx].trim();
        if (line.startsWith('msgctxt')) {
            yaml.push(("\n" + line.replace("msgctxt ", "").replaceAll('"', '') + ": |-").toLowerCase());
        }
        else if (line == 'msgid ""') {
            continue;
        }
        else if (line.startsWith('msgid ')) {
            yaml.push("    " + line.replace("msgid ", "").replaceAll('"', '').replaceAll('\\n', ''));
        }
        else if (line.startsWith('"')) {
            yaml.push("    " + line.replaceAll('"', '').replaceAll('\\n', ''));
        }
    }
    return yaml.join('\n');
}

async function main() {
    const namFolder = process.argv[2];
    const iconFolder = 'assets/images/icons';
    const yamlFile = 'data/nam-icons.yml';
    const dbpfExtensions = ['.dat', '.sc4lot', '.sc4model', '.sc4desc'];
    mkdirSync(iconFolder, { recursive: true });
    mkdirSync(path.dirname(yamlFile), { recursive: true });

    const extracted = new Map(); // instance (hex) -> tgi id
    let fileCount = 0;

    for (const file of walk(namFolder)) {
        if (!dbpfExtensions.includes(path.extname(file).toLowerCase())) continue;
        fileCount++;

        let dbpf;
        try {
            dbpf = new DBPF(file);
        } catch (err) {
            console.warn(`Skipping ${file}: ${err.message}`);
            continue;
        }

        for (const entry of dbpf.exemplars) {
            let exemplar;
            try {
                exemplar = entry.read();
            } catch {
                continue; // if unreadable/corrupt exemplar, skip rather than abort whole run
            }

            const iconValue = exemplar.value('ItemIcon');
            if (!iconValue) continue;
            const instance = Array.isArray(iconValue) ? iconValue[2] : iconValue;
            const iconEntry = dbpf.find({ type: FileType.PNG, instance });
            if (!iconEntry) continue;

            const id = tgiToId(iconEntry.tgi.toArray());
            const instanceHex = id.split('-')[2];
            if (extracted.has(instanceHex)) continue; // already extracted this icon

            writeFileSync(path.join(iconFolder, `${id}.png`), iconEntry.decompress());
            extracted.set(instanceHex, id);
        }
        dbpf.free();
    }

    const yaml = await FetchAndParseButtonLabels('https://raw.githubusercontent.com/NAMTeam/Network-Addon-Mod/refs/heads/staging/ltext/buttons.pot');
    writeFileSync(yamlFile, yaml);
    console.log(`Scanned ${fileCount} DBPF files, extracted ${extracted.size} icons.`);
    console.log(`Images: ${iconFolder}`);
    console.log(`Config: ${yamlFile}`);
}

function* walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(full);
        else yield full;
    }
}

function tgiToId([type, group, instance]) {
    const hex = (n) => n.toString(16).padStart(8, '0').toLowerCase();
    return `${hex(type)}-${hex(group)}-${hex(instance)}`;
}

main();
