---
title: 'Halo: Combat Evolved Anniversary'
stub: true
img: cea.jpg
caption: H1A was released independently on Xbox 360 and under MCC for PC and Xbox One.
thanks:
  zatarita: >-
    Documenting H1A differences from PC and between versions, summarizing new
    formats
  Kavawuvi: H1A BSP data base address
---
**Halo: Combat Evolved Anniversary**, commonly referred to as **H1A** or **CEA** was first released in 2011 as a collaboration project between [343 Industries][343i-wiki], and [Saber Interactive][saber-wiki]. It aimed to modernize the look and feel of the original game for use with the more powerful [Xbox 360][360-wiki]. With the release of [Halo MCC][mcc-wiki], CEA has also seen a port to PC and Xbox One.

One of its quirks is the ability to switch between classic and remastered/anniversary visuals and sounds with the press of a button.

As of season 7, H1A represents a merger between the original H1CE and H1PC branches of the engine.

# Modding
H1A officially supports modding with the release of the upgraded [H1A Editing Kit](~h1a-ek). The editing kit can be downloaded via Steam and used to make custom maps. At this time, users must turn EAC off and replace existing stock maps with custom ones in order to play them.

# Changes
The H1A engine saw some adjustments to the [map](~) format. This made it difficult for some existing [modding programs](~tools) to read the new format.

* BSP vertices are stored [outside of the BSP tag][h1a-map-files] and BSP data is loaded at address `0x41448000` instead of within the tag data space.
* The tag data address has been adjusted from `0x40440000` to `0x40448000`.
* The maps (and other files) are compressed using a variant of [zlib][] compression.
* [Bitmaps](~bitmap), and [sounds](~sound) have been relocated from their respective bitmaps.map/sounds.map locations. The sounds are now in [FMOD][] sound banks, and the bitmaps are stored inside ipaks.

The rest of the [tags](~) system appears to be unaltered.

With the introduction of the Saber3d engine also came new file formats:

* The **ipak** holds all the texture information for the game. This includes classic textures as well.
* The **imeta** holds entries for the ipak. This links textures in the ipak to the level.
* The **fmeta** is designed to link dependent files together.
* The **s3dpak** is an [archive file][archive-wiki] holding the files needed for the Saber engine.

# Differences in versions
There are some differences between the PC [PC (MCC)][mcc-wiki], and [Xbox 360 version][h1a-wiki] versions; most of the assets have been rearranged to optimize things for their respective platforms.

* Xbox uses a different compression algorithm. The chunking is still done the same; however, it does not utilize zlib.
* Xbox does not utilize ipak/imeta/fmeta. Instead the primary filetype is the s3dpak.

It is unknown how the MCC Xbox One version compares.

[343i-wiki]: https://en.wikipedia.org/wiki/343_Industries
[saber-wiki]: https://en.wikipedia.org/wiki/Saber_Interactive
[360-wiki]: https://en.wikipedia.org/wiki/Xbox_360
[mcc-wiki]: https://en.wikipedia.org/wiki/Halo:_The_Master_Chief_Collection
[h1a-wiki]: https://en.wikipedia.org/wiki/Halo:_Combat_Evolved_Anniversary
[archive-wiki]: https://en.wikipedia.org/wiki/Archive_file
[h1a-map-files]: https://opencarnage.net/index.php?/topic/7904-differences-between-halo-pc-and-cea-map-files/
[zlib]: https://en.wikipedia.org/wiki/Zlib
[fmod]: https://www.fmod.com/
