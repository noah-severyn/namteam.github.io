---
title : "Tunnel and Slope Mod"
description: "The NAM Tunnel and Slope Mod provides SimCity 4 players with additional choices for the slope parameters of surface transportation networks in the game."
lead: "The NAM Tunnel and Slope Mod provides SimCity 4 players with additional choices for the slope parameters of surface transportation networks in the game. This collection of slope mods was designed by <b>Lucario Boricua</b>, author of the <a href='https://community.simtropolis.com/forums/topic/759928-lucario-boricuas-earthworks-tutorials-official-thread/'>Earthworks Tutorials series</a>. Extensive research was conducted for both other slope mods and the findings of previous precision terraforming pioneers, most notably <b>BigRedFish</b> and <b>Ennedi</b>, as well as geometric design characteristics of real transportation networks, to best harmonize playability and realism. As these are beta versions, players are strongly encouraged to provide their feedback, to fine-tune later beta versions and eventually complete an official set of NAM tunnel and slope mods!"
date: 2022-09-06T10:09:26+00:00
lastmod: 2026-06-05T09:44:00+00:00
draft: false
images: []
url: "docs/feature-guides/tunnel-and-slope-mod"
---

{{< alert context="info" >}}
<p class="fs-5">This feature is still in beta.<br><br>To allow more frequent updates, it is not included in the main NAM package, and must instead be downloaded separately <a href='https://community.simtropolis.com/files/file/35420-network-addon-mod-tunnel-and-slope-mod/'>from Simtropolis</a> or with <a href='https://community.simtropolis.com/files/file/36700-sc4pac-mod-manager/'>sc4pac</a> → <a href='sc4pac:///package?pkg=nam-team%3Atunnel-and-slope-mod&channel=https%3A%2F%2Fmemo33.github.io%2Fsc4pac%2Fchannel%2F'><code>nam-team:tunnel-and-slope-mod</code></a>.</p>
{{< /alert >}}

## Slope Mod Characteristics

Each of the slope mod variants contain a number of baseline modifications to Maxis properties. These improvements are as follows:

1. **NAM DLL Compatibility for Street Tunnels**
    - The street network tuning parameters were modified to enable compatibility with street tunnel functionality introduced by the [NAM DLL](https://github.com/NAMTeam/nam-dll/releases). When using the NAM tunnel and slope mod, make sure to remove the street slope mod file included in the `NAM-dll-supplemental-files` folder. The NAM Tunnel and Slope Mod, on its own, does not enable street tunnels!
1. **Modified Subway and Water Pipe Depth parameters**
    - The modified parameters enable players to build the Subway and Water Pipe networks regardless of steep changes in topography (ex. cliffs, mountains or canyons), using parameters adapted from the [Underground Depth Mod by Thalassicus](https://community.simtropolis.com/files/file/21366-underground-depth-mod-v10/).
1. **Faster Construction animations**
    - All construction animations have been sped-up by a factor of 6, reducing the wait time from first drawing or dragging a network, until the construction animation concludes.
1. **Finer Smoothing progression steps**
    - All surface networks have their smoothing progression steps increased to 4096 steps, in 1-cell increments. This ensures the game calculates the network’s slope conformance to a much greater degree than the game default settings. This results in much smoother looking slopes
1. **Realistic relative steepness by base network**
    - The steeper variants (Very Easy/Very Steep, Easy/Steep, and Moderate Vanilla) have decreasing steepness in the following order: Street → Road, One-way, Avenue and Tram dual networks → Elevated Highway, Ground Highway, RealHighway and El-Rail/Ground Light Rail → Rail and Monorail
    - The flatter variants (Moderate NAM, Strict / Flat, and Realistic / Very Flat) instead use this flatness and vertical curvature sequence, more closely approximating the relationship between real transportation network geometries. These variants have decreasing steepness in the following order:  Street → Road and One-way → Avenue (same max slope but smoother vertical curvature compared to Road and One-way) → Elevated Rail / Ground Light Rail → Elevated Highway, Ground Highway and RealHighway → Monorail → Rail / Hybrid Railway
1. **Integer numbers of cells for key height differences**
    - SimCity 4 slope parameters are inputted in degrees (°), rather than the height change per cell (m per cell, or ft per cell), percent (%, typical of roadways) or permille (‰, typical of railways) grades. The values in degrees were selected such that the runs required to cover 7.5m (all networks), 15.0m (road networks) or 15.5m (rail networks) are whole numbers of cells, allowing players to intuitively estimate the network slopes by length.

## Vertical Curvature

The Moderate (NAM style), Flat, and Very Flat variants make an additional modification to the slope parameters called vertical curvature.
Instead of a network transitioning from flat, immediately to sloped, and then to flat again (see #1 below), the transitions between flat and sloped are smoothed out, giving that transition a curved effect similar to a rollercoaster, hence the term "rollercoasting" - see #2 below.
While this gives slopes a more natural curvature, one drawback is the additional tiles required for the slope. See the green tiles in #3 below, which are now occupied by the slope. This may have undesired effects if you have buildings or developments on those tiles, so this effect can be mitigated by anchoring the ends of a network segment by placing road or rail squares and the top or bottom of the slope - the network won’t build until the distance is sufficient to accommodate the maximum slope and the vertical curvature.


{{< carousel >}}
    images/vertical-curvature-1.png | A slope without vertical curvature
    images/vertical-curvature-2.png | A slope with vertical curvature
    images/vertical-curvature-3.png | Vertical curvature lengthens the slope
{{< /carousel >}}

## Slope Mod Variants

The tunnel and slope mods come in six different steepness variations, rated from steeper to smoother.
In general, steeper variants are easier to use because less terraforming is required for networks to traverse a slope.
The detailed parameters of each variant can be found in the [Tunnel and Slope Mod Technical Specifications](/docs/tech-specs/tunnel-and-slope-mod.md).

{{< carousel >}}
    images/00-maxis-default.jpg | Maxis Default
    images/01-very-easy-very-steep.jpg | Very Easy / Very Steep
    images/02-easy-steep | Easy / Steep
    images/03-moderate-vanilla-style.jpg | Moderate  / Vanilla style
    images/03-moderate-nam-style.jpg | Moderate / NAM style
    images/04-strict-flat.jpg | Strict / Flat
    images/05-realistic-very-flat.jpg | Realistic / Very Flat
{{< /carousel >}}

#### Maxis Default

The Maxis Default slope mod settings do not alter any property of the slope parameters of any transportation network, apart from the height of the RealRailway tunnel portal.

{{< alert context="success" >}}
Players who do not wish to install any flatter slope mod variants are advised to use this one to ensure the terrain correctly matches the railway tunnel portal heights.
{{< /alert >}}

#### Very Easy / Very Steep

The Very Easy or Very Steep slope mod settings provide a minimal reduction of the maximum slopes of the networks, providing a minor smoothness improvement compared to the game default properties.
This variant does not use vertical curvature settings and as such is not subject to the rollercoasting effect.

{{< alert context="success" >}}
Players who do not want transportation networks to interfere with their gameplay and want effortless network construction in hilly and mountainous areas, but who still want a visual improvement of their transportation networks are advised to use this variant.
It’s very forgiving, but considerably enhances the appearance of the transportation networks along steep topography.
{{< /alert >}}

#### Easy / Steep

The Easy or Steep slope mod settings provide a small but significant reduction of the maximum slopes of the networks, providing somewhat more of a smoothness improvement compared to the game default properties.
This variant one does not use vertical curvature settings, and as such is not subject to the rollercoasting effect.
Small modifications were applied to enable a small degree of additional smoothing when building networks along bumpy terrain.

{{< alert context="success" >}}
Players who want good-looking transportation networks and get properly introduced to slope mods in their gameplay are advised to use this variant.
Players who regularly play on rugged topography with minimal precision terraforming are also advised to use this variant.
It’s very forgiving, but considerably enhances the appearance of the transportation networks along steep topography.
{{< /alert >}}

#### Moderate / Vanilla style

The Moderate, Vanilla Style slope mod settings provide an intermediate reduction of the maximum slopes of the networks, providing a clear smoothing of the networks, achieving a balance between ease of gameplay and realism. 
This variant does not have vertical curvature, and as a result will look slightly steeper than the smooth height transitions and FLUP portals provided as part of the Network Addon Mod.
It is also is the flattest variant in which both Rail and Monorail share the same slope, for ease of gameplay purposes.
Small modifications were applied to enable a small degree of additional smoothing when building networks along bumpy terrain.

{{< alert context="success" >}}
Players who have some experience with slope mods are advised to use this variant, unless they are using it on existing cities built over rugged terrain and numerous parallel networks.
Additionally, players who want a better balance between ease of use and appearance are likely to appreciate this variant of the NAM Tunnel and Slope Mod, as long as they accept some added difficulty to build networks along hilly and mountainous areas.
{{< /alert >}}

#### Moderate / NAM Style

The Moderate, NAM Style slope mod settings provide an intermediate reduction of the maximum slopes of the networks, providing a clear smoothing of the networks, achieving a balance between ease of gameplay and realism.
Contrary to its Vanilla counterpart, this variant does feature vertical curvature on all networks except Street, Road, and One-way.
The small amount of vertical curvature added by this steepness variant helps smooth out transitions between sloped and flat portions of the networks, at the expense of a greater space
requirement.
The result is that network slopes will be identical to the smooth height transitions.

This variant is the steepest which features a flatter Rail slope and a steeper Monorail slope, for realism purposes.
Both monorail and dedicated high speed railway networks support steeper gradients compared to conventional railways owing to the weight of trains (heavy freight trains require flatter grades) and their propulsion systems.
Monorail and HSR trainsets generally feature Electrical Multiple Unit designs, in which each bogie (set of wheels) has its own separate motor for distributed propulsion and greater acceleration/braking capacity.

{{< alert context="success" >}}
Players who have some experience with slope mods are advised to use this variant, unless they are using it on existing cities built over rugged terrain and numerous parallel networks.
{{< /alert >}}

#### Strict / Flat

The Strict or Flat slope mod settings trend towards realism, with slopes flatter than the equivalent smooth height transitions and FLUP portals provided with the Network Addon Mod.
This is also the steepest slope mod setting in which nearly all the networks feature vertical curvature, excluding the street.
Faster networks will have smoother vertical curvature, which correlates with required sight distances (faster travel requires greater visibility for vehicle operators to react safely).

{{< alert context="warning" >}}
These slope mod settings are recommended for players who want highly realistic network designs and greater challenge in building across rugged terrain, with flatter networks forcing them to choose their alignments more carefully.
**_Novice transportation players are advised not to use this slope mod if they want to avoid frustration._**
They are advised to use it if wanting to learn how to use them to their best potential!
{{< /alert >}}

#### Realistic / Very Flat

The Realistic or Very Flat slope mod settings use values nearly identical to those found in real transportation network geometric design, resulting in really flat networks.
Transportation power players and players accustomed to precision terraforming will likely find these settings to be challenging, even for flatter terrains.
A more advisable option would be to select a few network-specific slope mod files for those cases in which realism is desired, otherwise general gameplay may be impaired by requiring long stretches to climb even small elevation differences.

{{< alert context="danger" >}}
**_The NAM team does not assume responsibility for players who choose this setting and complain about the inability to build networks!_**
{{< /alert >}}