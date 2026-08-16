---
title : "The NAM DLL"
url: "/docs/feature-guides/nam-dll"
description: "The NAM DLL is a fundamental part of NAM 50, and will be a core component of all NAM releases going forward. The DLL is a building block that complements and expands the functionality of the NAM in ways that would not otherwise be possible."
lead: "The NAM DLL is a fundamental part of NAM 50, and will be a core component of all NAM releases going forward. The DLL is a building block that complements and expands the functionality of the NAM in ways that would not otherwise be possible. For example draggable diagonal streets, street tunnels, and new keyboard shortcuts for networks are all features enabled by the DLL that are not otherwise possible in the game."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
---

## Overview

The NAM DLL brings a wide variety of fixes, many of which were previously thought impossible to implement due to limitations imposed within the game or its code.
Should you wish to disable any of the features introduced by this DLL, either because of personal preferences or for debugging purposes, this is possible by installing the optional [NAM.ini](https://github.com/NAMTeam/nam-dll/blob/main/src/NAM.ini) file.
When the game is launched, the NAM DLL will read the configuration you have specified in this file and enable or disable the features as specified.
The NAM DLL is fully open source, and is distributed under the [LGPL-3 license](https://opensource.org/license/lgpl-3-0). The source can be found at [Github](https://github.com/NAMTeam/nam-dll).

### New RUL2 Engine

One of the most substantial new features of the DLL is a custom RUL2 engine.
[RUL2](https://wiki.sc4devotion.com/index.php?title=RUL2) code defines what happen when a texture or model is drawn adjacent to another texture or model, and are essential for draggable networks and intersections, and especially so for overrides.
The new custom engine: 
- makes override networks much more stable,
- allows for tighter footprints (i.e. crossings of override networks that previously had to be placed one tile apart may now be placed directly adjacent to each other),
- reduces the size of the NAM codebase by almost 90% and by 10.8 million lines, making it easier to maintain and reducing the chance of bugs,
- improves performance and load time (the initial city load time is reduced by a huge amount, as a result of the controller code size reduction),
- removes the strict requirement for the 4GB patch (though usage is still recommended), and
- removes the Low-RAM/No-RHW controller as the full NAM Controller is now less than 60 MB.

{{< img-simple src="images/rul2-code-diff.jpg" class="img-fluid" caption="Lines of RUL2 removed from the controller due to the new engine" >}}

### Eternal Commuter Loop Fix
The Eternal Commuter Loop is a bug (or design flaw in the game's pathfinding) in the game by which commuters between a series of cities get stuck in a loop traveling between cities, never actually finding a job. 
This is perhaps one of the longest-standing bugs in the game that has not yet been able to be solved, with posts discussing possible solutions as far back as 2008.
In short, sims in a city will attempt to find work in a neighboring city if a neighbor connection is a shorter commute than jobs within the same city. Once they enter the new city, if a neighbor connection is again shorter than jobs in the city, the sim will again choose the neighbor connection to find a job. 
Since the game does not retain any history of commutes once a sim crosses a neighbor connection, this process repeats over and over, until sims are stuck in a loop and are never able to find a job.

The NAM DLL introduces a feature designed to halt the creation of a commute loop via a small tweak where neighbor-to-neighbor routes that connect the city to the North and the city to the West are blocked by the path finder, so loops cannot form anymore.
All other connections, such as South-to-North or East-to-West, are still allowed.

{{< img-simple src="images/commute-loop-fix.jpeg" class="img-fluid" caption="West ↔ North connections are blocked, thus preventing the loop from forming" >}}

More information about the commute loop and the community's evolution of knowledge and workarounds can be found across multiple threads across the years: [A solution to the eternal commuter problem](https://www.sc4devotion.com/forums/index.php?topic=5271.0), [Eternal Commute](https://community.simtropolis.com/forums/topic/60791-eternal-commute/), [Further Clarification on the Eternal Commuter Bug](https://community.simtropolis.com/forums/topic/52887-further-clarification-on-the-eternal-commuter-bug/), [Help Removing A Commuter Loop](https://community.simtropolis.com/forums/topic/72324-help-removing-a-commuter-loop/), [Possible (Maybe Not) Solution to Eternal Commuter Problem?](https://community.simtropolis.com/forums/topic/75411-possible-maybe-not-solution-to-eternal-commuter-problem/), and [My Real Fix for Eternal Commute Loop problem](https://community.simtropolis.com/forums/topic/762585-my-real-fix-for-eternal-commute-loop-problem/).

### Slope Tolerance for Network Pieces
The slope tolerance for many network elements has been significantly improved.
- 45 degree curves of single-tile networks are slope-conforming now.
- All starter pieces and many FLEX pieces are slope-tolerant now.
- The FLEX On-slope pieces have been improved:
    - Their footprint has been minimized.
    - The sinkhole bug associated with them is fixed.
    - Networks can be dragged through the On-slope transition piece.

{{< gallery col-xl="2" col-lg="2" col-md="2" caption="Improved slope tolerance for stations and starters">}}
    images/slope-tolerant-starters-1.jpeg
    images/slope-tolerant-starters-2.jpeg
{{< /gallery >}}

{{< gallery col-xl="2" col-lg="2" col-md="2" caption="Improved slope tolerance for curves">}}
    images/slope-tolerant-curves-1.jpg
    images/slope-tolerant-curves-2.jpg
    images/slope-tolerant-curves-3.jpg
    images/slope-tolerant-curves-4.jpg
{{< /gallery >}}

{{< img-simple src="images/on-slope-3.jpeg" class="img-fluid" caption="Networks can pass through on-slope pieces" >}}

{{< img-simple src="images/on-slope-2.jpeg" class="img-fluid" caption="Smaller footprint of on-slope pieces allows networks to be placed adjacent to them" >}}

### Street Network updates
Multiple updates have been included for the street network:
- Streets can now be dragged diagonally.
- Tunnels can now be built using the Street network.
- Auto-connect of the Street and RHW networks has been disabled.

{{< img-simple src="images/diag-draggable-streets-and-tunnels.jpeg" class="img-fluid" >}}

### Keyboard Shortcuts for Missing Networks.
Out of the box, SC4 never provided keyboard shortcuts for certain networks. The NAM DLL adds these shortcuts via an included `KEYCFG` file:
- Monorail: <kbd>Ctrl</kbd> + <kbd>Y</kbd>
- One-Way Road: <kbd>Shift</kbd> + <kbd>E</kbd>
- Ground Highway: <kbd>Alt</kbd> + <kbd>E</kbd>
- RHW: <kbd>Control</kbd> + <kbd>E</kbd>

### Other Misc Changes
Other minor changes now enabled by the DLL include:
- Removal of the invisible cursor tile from all FLEX pieces. The handle does not interfere with any lots or networks anymore.
- A reduction of the minimum height of bridges to enable ferry clearance from 30 to 20 meters.
- An option to allow RCI zones to access RHW networks (disabled by default).