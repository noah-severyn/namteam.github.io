// Extracts all menu icon PNGs from a NAM install, and pulls the button LTEXT strings from the NAM repo into a data file. The menu-icon shortcode uses the TGI and data file to automatically fill in the icon description.
// Usage: node scripts/extract-nam-icons.js <path-to-nam-plugins>
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { DBPF, FileType } from 'sc4/core';
import { stringify } from 'yaml';

async function main() {
    const namFolder = process.argv[2];
    const iconFolder = 'assets/images/icons';
    const yamlFile = 'data/nam-icons.yml';
    const dbpfExtensions = ['.dat', '.sc4lot', '.sc4model', '.sc4desc'];
    mkdirSync(iconFolder, { recursive: true });
    mkdirSync(path.dirname(yamlFile), { recursive: true });

    const extracted = new Map(); // instance (hex) -> tgi id
    let fileCount = 0;

    const files = walk(namFolder);
    for (const file of files) {
        if (!dbpfExtensions.includes(path.extname(file).toLowerCase())) continue;
        fileCount++;

        let dbpf;
        try {
            dbpf = new DBPF(file);
        } catch (err) {
            console.warn(`Skipping ${file}: ${err.message}`);
            continue;
        }

        //Extract menu entry information and icon images
        for (const entry of dbpf.exemplars) {
            let exemplar;
            try {
                exemplar = entry.read();
            } catch {
                continue; // if unreadable/corrupt exemplar, skip rather than abort whole run
            }

            const exemplarName = exemplar.value('ExemplarName');
            const iconInstance = exemplar.value('ItemIcon');
            if (!iconInstance) continue;
            //I believe NAM files will always have the icon in the same dbpf file as the exemplar
            const iconEntry = dbpf.find({ type: FileType.PNG, instance: iconInstance });
            if (!iconEntry) continue;

            const props = {
                File: fileName,
                Icon: TgiToString(iconEntry.tgi.toArray()), //TGI
                Name: TgiToString(exemplar.value('UserVisibleNameKey') ?? []), //TGI
                Description: TgiToString(exemplar.value('ItemDescriptionKey') ?? []), //TGI
            }

            if (extracted.has(exemplarName)) continue; //The same exemplar name can appear multiple times in different menus (wit different TGIs), skip these as they have the same icons

            writeFileSync(path.join(iconFolder, `${props.Icon}.png`), iconEntry.decompress());
            extracted.set(exemplarName, props);
        }
        dbpf.free();
    }

    console.log(`Scanned ${fileCount} DBPF files, extracted ${extracted.size} icons.`);
    console.log(`Images: ${iconFolder}`);
    console.log(`Config: ${yamlFile}`);
    console.log(`Locale strings: ${[...localeStrings.keys()].join(', ') || 'none found'}`);
}

/**
 * Fetch the list of available languages in the documentation site
 * @param {string} tomlFile 
 * @returns {string[]} Array of language codes available in the documentation site
 */
function getLanguages(tomlFile) {
    const content = readFileSync(tomlFile, 'utf8');
    return [...content.matchAll(/^\[(\w+)\]$/gm)].map(match => match[1]); // top-level table headers only, skips [en.params]
}

function* walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(full);
        else yield full;
    }
}

function TgiToString(tgiArray) {
    if (tgiArray.length == 0) {
        return '00000000-00000000-00000000';
    }
    return `${ToHexString(tgiArray[0])}-${ToHexString(tgiArray[1])}-${ToHexString(tgiArray[2])}`;

    function ToHexString(n) {
        return n.toString(16).padStart(8, '0').toLowerCase();
    }
}

main();
