---
title : "Installation"
description: "Installation instructions for the Network Addon Mod."
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 2
draft: false
images: []
url: "docs/getting-started/installation"
---

{{< alert context="danger" >}}
<span class="fs-3" style="display: flex;justify-content: center">❕ New for NAM 50 ❕</span>
**The NAM.dll is <span style="color:red">required</span> starting with NAM Version 50**. If your system or game does not support the use of DLLs, consider using NAM Lite, which does not depend on the DLL, or switch to an older legacy release.

Users wishing to simply use the NAM's Traffic Simulator improvements should install the NAM Lite package, which offers easy setup of various minimal options.

MacOS users (or users of other unsupported systems) should refer to the [Note to Mac Users](/docs/getting-started/installation/#mac) below for further information and choices.
{{< /alert >}}

## Minimum Requirements

### Game Version

The Network Addon Mod is compatible with the following versions of the SimCity4 Deluxe/Rush Hour running **Version 1.1.641**:

{{< table class="w-auto" >}}
|                         | Digital Retail (GOG, Steam, EA/Origin/Xbox Game Pass) | Disc           | Pirated |
| ----------------------- | :---------------------------------------------------: | :------------: | :-----: |
| Windows                 | ✅<sup>1</sup>                                       | ❌<sup>2</sup> | ❌     |
| Linux (via WINE/Proton) | ✅<sup>1</sup>                                       | ❌<sup>2</sup> | ❌     |
| macOS                   | ❌<sup>3</sup>                                       | N/A             | ❌     |
{{< /table >}}

<span class="fs-6">**<sup>1</sup>** Any digital retail edition, i.e. Version 1.1.641, is compatible ([the EA App/Origin/Xbox Retail Edition is compatible since June 2023](/docs/getting-started/installation-notes/#origin-ea-play-xbox-gamepass)).</span><br>
<span class="fs-6">**<sup>2</sup>** The now-rare disc copies of SimCity 4 are incompatible. Starting with NAM 50, support for the Windows disc copies of SimCity (Version 1.1.638 or older) is discontinued, as they are incompatible with the DLL features.</span><br>
<span class="fs-6">**<sup>3</sup>** Starting with NAM 50, support for any editions of the Aspyr port for macOS is discontinued ([Note to Mac Users](/docs/getting-started/installation/#mac)), as they are incompatible with the DLL features. The last macOS-compatible NAM version was NAM 49.</span><br>

### System Requirements

The Network Addon Mod requires your computer have at least the following:
- Any system with a 64-bit operating system, at least 4GB RAM, and 1.0 GB (30 MB for NAM Lite) of available disk space. Windows 10 or later is recommended.
- The [Microsoft Visual C++ 2022+ x86 Redistributable](https://aka.ms/vs/17/release/vc_redist.x86.exe) must be installed. Current versions of Windows 10 and 11 have this pre-installed already.
- Java Runtime Environment (JRE), version 8 or newer, in order to run the installer. A version for 64-bit Windows is included in the NAM download if you do not already have Java: `OpenJDK25U-jre_x64_windows_hotspot_25.0.4_7.msi`.
    - If you are not on 64-bit Windows and need Java, [Adoptium's open-source edition](https://adoptium.net/temurin/releases) is recommended, though JRE and JDK can also be acquired in a proprietary/commercial (but free to download) form from Oracle at [https://www.java.com/](https://www.java.com/).
    - The Java Development Kit, or JDK, will also work, but contains extra files not needed unless you are a Java developer.


## Installation Methods {#install}

{{< details "Upgrading from a previous version" >}}

Generally speaking, the NAM Team makes every effort to ensure that new versions at least retain some form of "legacy support", such that cities built with any previous NAM version will continue to function well with the latest version.

With the new installer, the old NAM installation is no longer removed automatically, so users should manually remove any NAM files from the Plugins folder:
1. Locate the `a_Network Addon Mod Lite`, `Network Addon Mod` and/or `z___NAM` folders as well as the `NAM.dll` and/or `NAM.ini` files in your Plugins directory.
2. Move these files in a safe location outside of your Plugins folder prior to removal.

The Station Locator, Updater, and Reconstruction Project (SLURP) is also no longer handled by the new installer.
There is ongoing internal discussion about reimplementing SLURP.
Users wishing to retain SLURPed stations should retrieve them from the `z___NAM\Mass Transit Lots\Station Overrides` folder in their existing NAM installation, where they will be found in the "Mass Transit Lots" subfolder.
Note that users running the 64-bit version of SimCity 4 on macOS may wish to refrain from retrieving SLURP stations, as there have been some encoding issues with stations that cause that version of the game to CTD.

If you have consolidated your NAM files using a tool such as SC4DatPacker or JDatPacker, please read [here](/docs/getting-started/installation#datpacking).

Finally, proceed with the installation using one of the options below.

{{< /details >}}

{{< details "Using sc4pac" >}}

You can use the [sc4pac Mod Manager](https://community.simtropolis.com/files/file/36700-sc4pac-mod-manager/) to install the NAM. 
Install the package [nam:network-addon-mod](https://memo33.github.io/sc4pac/channel/?pkg=nam:network-addon-mod) and the optional content listed therein, instead of running the NAM installer. 
This makes it easy to install, update and uninstall the NAM. 
The mod manager guides you through all the important installation options and even remembers your choices. Some non-default legacy options are not included, however.

Before installing the NAM through sc4pac for the first time, make sure to fully [uninstall the NAM](/docs/getting-started/installation#uninstallation) first by removing all NAM files from previous manual installations.

{{< /details >}}

{{< details "Using the installer" >}}

1. Install the Java Runtime Environment (JRE), if not already installed.

2. Remove any existing NAM installations if present - simply deleting the "a_Network Addon Mod Lite" and/or "Network Addon Mod" folder from the `Documents\SimCity 4\Plugins` directory is the easiest way.

3. [Download the NAM Installer](/download-the-nam) and unzip the file.

4. Run NetworkAddonMod_Setup_Version{{< param docsversion >}}.jar, which is the installer. **This is now the recommended installation procedure for all operating systems.**

5. Follow the installer's instructions, clicking on each tab on the top bar in order.
    1. Agree to the mod's terms on the initial "welcome" tab to proceed with the installation.
    2. Select the options you would like to install under the "files" tab.
    3. Select the install location under the "location" tab. Unless you have set up an alternate location for your Plugins folder, this should be correct without needing to change it.
    4. Finally, move to the "install" tab. Click the "Start installation" button to begin the installation process.
    5. Close the installer, using the "X" button in the upper right corner of the window.

6. Install the DLL:
    1. Manually copy the `NAM.dll` file into the top-level directory of your Plugins folder.
    2. Do not place it inside the "Network Addon Mod" sub-folder. Instead, place it directly into the `Documents\SimCity 4\Plugins` folder.
    3. Make sure older `NAM.dll` files have been removed from both Plugins folders (the one under Documents and the one in the game's installation location). The choice of Plugins folder does not matter, as long as the DLL is only placed in one of them.

6. Apply the 4GB patch - optional, but recommended.
    1. **As of NAM 50, the 4GB patch is no longer required, but is still recommended.**
    2. To determine whether the 4GB Patch has already been applied, check the `NAM.log` file that is created by the DLL at every launch of the game ("The 4GB patch is installed" or "The 4GB patch not installed"). 
    2. Open the enclosed **4gb_patch.exe** file in the NAM download (or download it from [NTCore](https://ntcore.com/4gb-patch/)). A window will appear asking you to choose a file. Navigate to your game's installation location and select **SimCity 4.exe**. The location of this executable will vary. The default locations for common versions are:
        - **Steam**: `C:\Program Files (x86)\Steam\steamapps\common\SimCity 4 Deluxe\Apps`
        - **GOG**: `C:\GOG Games\SimCity 4 Deluxe Edition\Apps`
        - **EA App**: `C:\Program Files\EA Games\SimCity 4 Deluxe Edition\Apps`
        - **Original Disc Copy**: `C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps`
    3. Upon completion, a message will pop up indicating whether or not the patch successfully applied.
        - Note that attempting to run the 4GB Patch file while still inside the download .zip may cause it to fail.
        - See [this segment of Haljackey's NAM installation video](https://youtu.be/mnuamQac9d0?si=ba1AAeRbTFuXLAIX&t=205) for a demonstration of the process. While this video was filed with NAM 46, the process of installing the 4GB Patch has not changed.
        - It is also possible to launch the 4GB Patch from a command line. Simply drop the *4gb_patch.exe* file into the same folder as your game's executable, and from the command line, type `4gb_patch.exe SimCity 4.exe`.

7. Load the game and enjoy the NAM!
    - If you've never run the NAM before, and you've picked a fuller installation option, the initial load of the game, and of the first city tile you open may be longer - often quite noticeably. This will shorten with subsequent loads of other cities, or, if you exit and re-enter the game. Installing the latest version of [Null 45's Startup Performance Optimization DLL for SimCity 4](https://community.simtropolis.com/files/file/36244-startup-performance-optimization-dll-for-simcity-4/) has been shown to make a dramatic difference in reducing load times.
    - If you do not see any icons in game, this most likely means your installation ended up in the wrong location. Reinstall, making sure the files go into your `Documents\SimCity 4\Plugins` folder.
    - If you have duplicate icons, this is an indication that you have multiple versions (or at least, portions of multiple versions) of the NAM installed simultaneously. We recommend removing all NAM files (both new and old) from the Plugins folder, and once again attempting an install of NAM {{< param docsversion >}}.
    - If an advisor message pops up, claiming that the NAM.dll is missing, then either you forgot to copy the DLL into the top-level directory of the Plugins folder, or your game edition is incompatible with the DLL, or you may need to install the Microsoft Visual C++ 2022+ x86 Redistributable (see (system requirements)[#system-requirements]).

{{< /details >}}

{{< details "Manual installation (advanced - not recommended)" >}}

Users who are unable or unwilling to install Java can perform a manual installation of the NAM, something which the new file architecture introduced in 2020 makes far more possible than the previous "Monolithic" releases.

This method requires a file decompression tool capable of opening .jar files, such as 7-zip (Windows) or Keka (macOS). To begin, open NetworkAddonMod_Setup_Version{{< param docsversion >}}.jar using your file decompression tool.

The NAM's contents are located in the "installation" subfolder. The current installer uses a series of character flags at the start of directory names, in order to instruct the installer how to order the options, whether they're mandatory or optional, etc.

Numbers preceded by the at sign ("@"), i.e. "@1", "@2", etc., are merely being ordered with this flag.

Any directory with the caret ("^") in front of the name (or behind a "@" ordering flag) is mandatory.

Any directory with the exclamation mark ("!") in front of the name (or behind a "@" ordering flag) is not installed by default.

Any options where the equal sign ("=") and the dash ("-") are present are mutually exclusive--only one should be installed (the "=" option is the default).

The "@1^Core" directory is required. All other folders have options within them. At least one of the folders starting with "0 NAM Controller" must be installed. With "4 Automata Controller#", and "9 Traffic Simulator#", simply select one of the options inside and discard the rest, as these are straight up mutually exclusive one another. Within "8 Texture and Drive Side Support", keep "z_Common Files", then select either "-EU" (for EU textures) or "=US" (for US textures), and within "-EU" or "=US", get rid of the "_RightSide" or "_LeftSide" (whichever does not coincide with the side the vehicles in your game drive), and decide if you want any (or none) of the other subfolder options (i.e. Cul-De-Sacs).

The Automata Controller basically affects the display of the visual traffic in-game--Standard is going to be the lightest, while Radical is going to be the heaviest, Persistent makes the automata visuals last longer, and the 24-Hour modifiers handle whether the display is constant, or follows the data for the 24-Hour clock in-game.

The Texture and Drive Side Support includes four options, depending on whether you want to use US/North American textures or Euro/International Textures, and the drive side of your game (RHD or LHD, which should match your selection for the NAM Controller).

With the Traffic Simulator, these are ordered by the "@1" and the like in order of lowest capacity option to highest. Medium is the default.

With 5 DataView Options#, there's two subfolders. Both are just straight up options, with nothing mutually exclusive. You can probably just leave this one as is, unless you really don't like the Data View changes.

With 6 Miscellaneous, the two mutually exclusive options to watch out for are Extended Station Queries (there's four options in there--very subtle differences between them), and Maxis Transit Lots\Airport Capacity Adjustment#, which has three options (Default, Medium, and Large). And the Hole Diggers and Raisers are very much recommended--they have lots of use outside regular NAM usage, too.

With 3 Additional Transit Stations, this depends on if you want more transit stations beyond the game's default, and what the NAM adds by default for certain additional override networks. There should be no harm in either adding this one in whole, or leaving it out altogether, and if there's certain added stations you like/don't like, you can go in and customize this later.

2 Additional Network Features is by far the biggest area of the installer. This contains all the actual network feature addons in the mod. Most networks/network groups will have a "Base Features" folder, which really ought to be mandatory, as it contains a lot of the NAM's basic additions to each network, along with any Wide Radius/Multi Radius Curves and Fractional Angles, as well as Roundabout options for the various road-type networks.

The main "mutually exclusive" option to look out for here is with the Maxis Highways (there's two options--@1=Default Style, which keeps the Maxis Highways' default look and adds the NAM's additions for it, or @2-Maxis Highway Override (RHW-Style), which completely reskins the Maxis Highways, removes access to the default interchanges, and replaces them with RHW-style modular interchange functionality and a few new ploppable interchanges. Using the RealHighway (RHW) option is pretty much mandatory if you're going this route).

The other ones to watch out for are in Water Transport, where the Canal Addon Mod (CAN-AM) has two mutually-exclusive styles (@1=Callagrafx Style and @2-SimGoober Style), and there's also quite a few "non-default" options in Roads, One-Way Roads, and Avenues.

Those three non-default options are !Legacy Auto Avenue Turn Lanes (these are the old auto-turn lanes that appear on Avenue x Avenue intersections--largely considered "deprecated" now, as they can interfere with some newer functionality), !Legacy Semi-Auto Road Turn Lanes (the "semi-auto" replacement for the old auto-turn lanes on Road x Road intersections, which now appear by clicking over Road x Road + and T-intersections with the One-Way Road tool, also somewhat "deprecated" now), and !One-Way Road Arrow Plugins. These Arrow Plugins are mostly just a matter of taste, and, despite the folder naming, actually supposed to be mutually exclusive. "Elimination" gets rid of the arrows entirely, "Reduction" hides some of them (and actually impacts the base functionality of the OWR network to some degree), while "Single Arrows" replaces the default double arrows with just a single arrow (which looks nicer on the NWM networks).

The rest of 2 Additional Network Features is pretty self-explanatory, though micromanagement of these options is not recommended, since it is possible to produce a broken installation this way. RealRailway is the only/default option for Rail now, it's best to go all or nothing on RealHighways (RHW) and the Road, One-Way Road, and Avenue folder's "Additional Widths and Turn Lanes" option (which contains the Network Widening Mod and FLEX Turn Lanes). And if something says "Legacy" but it's not prefixed with "!", it's probably safest to install it, as it pertains to being able to keep certain older, deprecated content working, if you've built it with previous versions.

{{< /details >}}

## Changing Options After Installation

The NAM is a very expansive mod, with a substantial number of features, which may initially prove overwhelming to those not well-versed in its workings.
The NAM Team anticipates that users, particularly those new to the NAM, may want to change the feature set they have installed, as they learn more about the mod's contents and capabilities.

To that end, we encourage users to keep the installer for the current version handy after initial installation.
If you plan to change your particular set of options, you will need to remove your current installation.
Moving it out of Plugins to a safe location is recommended, in case you want to keep your existing settings as a backup.

## Uninstallation

To uninstall the mod, simply bulldoze every NAM item from this download in your cities and remove the files from the Plugins folder afterwards.
NAM content is contained in the *`Plugins\Network Addon Mod`* folder by default.

## Troubleshooting

Consult one of our troubleshooting pages first to see if your question is covered there.
* Run into an issue during gameplay? Consult the [Troubleshooting (Gameplay)](/docs/getting-started/troubleshooting-gameplay) page.
* Have a general question? Consult the [Frequently Asked Questions](/docs/getting-started/frequently-asked-questions) page.
* Otherwise drop us a message in the one of the Support areas linked in the top navigation bar. 

# When you're done installing, it's on to [The Basics](/docs/getting-started/in-game-basics).

<br><hr><br>

## Important Notes

### Notes for NAM 50

The RealRailway (RRW) standard for Rail is now the default and only option, unless using NAM Lite.
Also note that a number of cosmetic-oriented NAM plugins, such as the El-Rail Alternate Implementation, the Bullet Train Mod, and some advanced texture options (largely deprecated) have been removed from the installer since NAM 37.
The Alternate El-Rail and BTM will be made available separately at a later date.
Please note that, much like Maxis Rail, these Plugins are effectively in "Legacy" status, and may not be actively maintained or supported by the NAM Team going forward, though you may choose to retrieve them from a past NAM installation's "z___NAM" folder.
Both the original Maxis Highways (MHW) and the "Maxis Highway Override/Project Symphony" (MHO) remain available.

### Note to Mac Users {#mac}

The Aspyr macOS versions of the game are unable to load DLL plugin files. 
As the NAM DLL brings important and major benefits for gameplay and maintainability of the NAM, support for the macOS versions of the game has been discontinued, as of NAM 50.
For further details, see [The Future of SC4 Modding: The Matter of Digital vs. Disc, and Windows vs. macOS in the DLL Era](https://community.simtropolis.com/forums/topic/762980-the-future-of-sc4-modding-the-matter-of-digital-vs-disc-and-windows-vs-macos-in-the-dll-era/).

The following options are available to Mac-users:
- Install [NAM 49](https://github.com/NAMTeam/Network-Addon-Mod/releases/tag/49_rev1), the last macOS-compatible legacy release.
- Install NAM Lite.
- Technically-versed users may look into installing the digital Windows edition of the game instead, see [How to install SimCity 4 Deluxe (Windows version) on a Mac with DLL support](https://community.simtropolis.com/forums/topic/764026-it-is-easy-to-play-simcity-4-deluxe-windows-version-on-a-mac-with-dll-support-draft/).

### A Note About the "4GB Patch" {#4gb-patch}

Due to changes in computer systems, and continued expansions of the NAM's main Controller file, in 2013, it was determined that many newer systems, particularly those with more than 4GB of RAM, and running 64-bit versions of Windows, need additional accommodation.
To that end, the NAM includes a "4GB Patch", also known as a "Large Address Aware (LAA) Patch", which allows the game to access the full 4GB of RAM that a 32-bit application can read, instead of the default 2GB.
The NAM's patch was designed by NTCore, and built into the NAM with permission.
The original patch can be found at [ntcore.com](http://www.ntcore.com/4gb_patch.php).

The only thing this patch does is to switch the Large Address Aware switch, an accessible switch present in all Windows executables, from "off" to "on" for the game's executable.
Patches like this are common in game modding communities, including those associated with The Elder Scrolls series (i.e. Skyrim), and Fallout, and can be used to enhance any 32-bit application's performance on systems with 64-bit operating systems and a suitable amount of RAM.

Note that the 4GB Patch is **NOT required for users on macOS**, as that version of the game is 64-bit and can access more RAM than the Windows version (even with the 4GB Patch!) by default.

The default directory for where SimCity 4.exe may be located depends on how and where you purchased your copy of the game.

* **GOG.com**: `C:\GOG Games\SimCity 4 Deluxe Edition\Apps`
* **Steam**: `C:\Program Files (x86)\Steam\steamapps\common\SimCity 4 Deluxe\Apps`
* **Original Disc**: `C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps`
* **Origin**: `C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps`

### Regarding "DatPacking" and File Consolidation Post-Installation {#datpacking}

Programs to consolidate folders worth of SimCity 4 .DAT files, such as SC4DatPacker (Windows) and JDatPacker (cross-platform), are popular options known to improve game performance, given SimCity 4's preference to read a smaller number of larger files, instead of a larger number of small files -- a fact determined by the BSC Team's "Miramba Experiment" of 2006.
The use of "DatPacking" programs on one's NAM installation, however, is a controversial topic.
The NAM Team's general advice is for Windows users to **avoid** DatPacking (unless one is extremely careful), while for Mac users, the use of JDatPacker is essentially <span style="color:green">required</span>.

In general, if one plans to DatPack one's NAM installation, **they should also save the pre-DatPacked NAM folder in a safe place, outside the Plugins folder beforehand**.
The reason for this is to avoid potential conflicts and issues, such as the "dual icon bug" and Controller file conflicts between new and old installations, as well as to make it such that one knows which options they have installed when upgrading to a new version, or re-installing the same version with different options.

Null 45's [Startup Performance Optimization DLL for SimCity 4](https://community.simtropolis.com/files/file/36244-startup-performance-optimization-dll-for-simcity-4/) provides a new option to dramatically speed up load times on Windows (and Linux) installations of the game, to the point at which the benefits of DatPacking become largely superfluous.

### A Note About Drive Side (RHD vs. LHD)

The concept of drive side refers to the side vehicles drive on, *not* the side one sits on when driving a vehicle.
Right-Hand Driving (RHD) refers to traffic driving on the right side of road, as is done in North and South America, Continental Europe and most of the Africa and Asia.
Left-Hand Driving (LHD) refers to traffic driving on the left side of the road, as is done in the UK, Japan, Australia, India, and other countries.

While the NAM Installer has a series of checkboxes in Custom Installation relating to drive side, it is important to note that these options **only change the compatibility files installed with the NAM, and <u>do NOT change drive side</u>**.
If you wish to switch between LHD and RHD, this generally needs to be done either by adjusting the game's locale files, and then either editing the game's Windows registry entries, or by modifying the game's shortcut.
A tutorial for how to complete this process can be found [at Simtropolis](https://community.simtropolis.com/omnibus/simcity-4/reference/alter-the-driving-side-lhd-rhd-rhd-lhd-of-sc4nam-r289/).

The NAM Installer cannot determine default drive side of your installation, so make note of which side vehicles drive on in your game prior to installation.
If you have changed your drive side by modifying the game's shortcut, instead of editing the Windows registry, then this would be the **one and only case when changing the box checked here would be needed**.

### Distribution and Old Versions

The NAM Team only provides support and allows distribution of the most recent NAM version.
With the exception of older non-English language versions (which are supported by their respective sites, not the NAM Team) and the macOS legacy version, no technical support will be provided to users of prior versions of the NAM, nor will any past versions of the NAM be made available for download, by request or otherwise.
The team does not keep an official archive of past releases, and does not have the resources to answer questions regarding them.
Each release includes improvements across the board to features new and old, is designed to be as compatible with cities built with previous versions as is humanly possible, and is also intended to improve the end user experience. Old releases are inherently inferior, and not "simpler" or "easier" to use.

Users wanting a smaller feature set, due to technical limitations, or unfamiliarity with the NAM's vast options, should instead seek to install NAM Lite, or fewer options in the current NAM.

Users wishing to hold onto old versions should back them up in their personal archives.
Note again that no technical support will be provided for this, nor may any user or site redistribute any old versions.

### Notice to Users Who Purchased a Digital Copy from Origin, or Use EA Play or Xbox Game Pass {#origin-ea-play-xbox-gamepass}

From it's inception through June 2023 (aside from a brief period in 2014-2015), Origin and the EA App, the digital retail platforms run by Electronic Arts (EA), sold copies of SimCity 4 Deluxe featuring an unpatched and unpatchable version of the game's executable file to retail customers. Unlike the retail versions sold by GOG.com and Steam (and previously Amazon's "Thin Game Download" version), which come prepatched to Version 1.1.641, the edition sold on the Origin Store and the EA App (also used by the EA Play subscription service), featured a Version 1.1.610 executable, mixed with Version 1.1.641 versions of the SimCity_1-5.dat files. By virtue of switching out the original SafeDisc copy protection for their own DRM, EA/Origin altered the checksum of the game's executable, thereby preventing EA's own EP1 Update 1 (Version 1.1.638) and BAT Nightlighting/EP1 Update 2 (Version 1.1.640) patchers from properly updating the executable. It also appeared to be more difficult to apply the 4GB Patch with the EA App version, which is needed in order to run a full NAM installation.

This not only failed to meet the NAM's minimum requirements, but left EA App/Origin retail copies with many stability issues Maxis developers fixed in 2003, and without working nightlighting on any custom buildings. It also prevented first-party content creation tools like the Building Architect Tool (BAT) from being installed, which look for a properly-patched executable. Note that this is in spite of the curious fact that [EA uses images of the NAM and other pieces of custom content](https://simtarkus.wordpress.com/2022/08/28/ea-uses-pictures-of-the-nam-to-promote-origin-ea-play-version-of-sc4-that-doesnt-support-the-nam/) to advertise SimCity 4, both on EA.com and in the EA App.

Furthermore, the EA App and Origin client are capable of actually unpatching other versions of SimCity 4 Deluxe that a user may have installed on their system, including the Steam and GOG versions, via the "Repair" process. Even if you are not playing an EA App/Origin version of the game, be aware that the EA App and Origin client can still unpatch your game.

For those who have purchased the game via EA.com, the EA App, or the Origin Store, and have Version 1.1.610, the NAM Team recommends you contact EA/Origin Support about obtaining a refund, even after the return period has expired, as users have had success in this case. If you are among the users who are saddled with the unpatched and unpatchable EA App/Origin retail version.

Strangely, copies obtained by redeeming an existing CD key at no cost with Origin Customer Support (Case C) *are* properly patched, despite what the same support team routinely tells those who bought copies and received defective Version 1.1.610 digital copies.

For a more detailed assessment of the Origin situation, NAM developer Tarkus has written extensively on the subject at his blog, [SimTarkus](https://simtarkus.wordpress.com/category/origin/).

In short:

* **Free copy from EA/Origin Support for CD Key Redemption**: Properly patched executable (1.1.641)
* **Purchased copy from EA.com, the EA App, the Origin Store, or playing via EA Play/Xbox Game Pass**: Properly patched executable (1.1.641)

### Notice to users with a disc copy of the game {#disc}

In 2015, Microsoft decided that secdrv.sys, the driver file used by the SafeDisc and other disc copy protection systems present in many PC games from the early 2000s, was a security threat. As a result, the driver was not included as part of Windows 10, and Microsoft issued Windows Update KB3086255, which disables secdrv.sys on Windows Vista, 7, 8, and 8.1. In the case of the older versions of Windows, secdrv.sys can be re-enabled when needed through the use of the command prompt or a batch file.

Aside from the advanced step of manually signing a device driver for Windows 10, the only viable courses of action are to either purchase a retail digital copy of the game, from a retailer who offers a fully-prepatched Version 1.1.641 copy of the game (i.e. GOG or Steam), or to get EA/Origin Customer Support to redeem your CD Key for a free digital copy of the game (unlike copies purchased via the Origin Store, the EA App, or EA Play subscriptions, CD Key Redemption copies are fully-prepatched to Version 1.1.641).

Note that cracked executables (i.e. a "No CD" .exe) are not eligible for tech support. The NAM Team does not support piracy, but understands the frustration with the game's original DRM system being blocked by Microsoft, forcing one to buy a new digital copy in order to continue playing. However, the reason why cracked executables are not eligible is for more practical reasons, namely the potential for version mismatches (i.e. a Version 1.1.638 crack with Version 1.1.610/613 .DAT files, or vice-versa), which can greatly complicate the team's efforts to provide useful technical support to users. The [Origin issues](#notice-to-users-who-purchased-a-digital-copy-from-origin-or-use-ea-play-or-xbox-game-pass) played a role in our keeping the version check in place, until the recent installer change in 2020.

Please note that if you are attempting to use an older, 32-bit version of Windows (i.e. Windows XP) in order to still run your disc game, this will substantially hamper the performance of the game with the full NAM installed, and it is highly recommended that you run the game on a 64-bit operating system if you intend to take advantage of the full feature set. If you must run on a 32-bit OS, you will need to either install the new NAMLite package, or, for a mid-sized installation, select one of the "LowRAM/NoRHW" NAM Controller options. (The RealHighway (RHW) system is by far the largest part of the NAM.)
