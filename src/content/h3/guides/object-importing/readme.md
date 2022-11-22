---
title: H3 Object Importing Hub
keywords:
  - modeling
  - exporter
  - importing
  - render model
  - render_model
  - physics model
  - physics_model
  - collision model
  - collision_model
  - animations
thanks:
  PepperMan: Writing this page.
redirects:
  - /h3/object-importing
---
This page will serve as the hub for custom object importing guides. As of right now, these guides have been written for Blender users, although those with knowledge in other 3D modeling programs such as Max may be able to follow along, and export to [FBX](~).

{% alert %}
The guides below show you how to create and import a simple cube shape into Halo. However, should you wish, you can follow along using whatever 3D model you would like.
{% /alert %}

# Understanding the data directory
[Data directory](~object-file-directories)

In this section we will be covering how to setup proper folder structures for our assets in the H3EK data folder. This section does not cater to a specific 3D software and can be read by anyone.

# Importing Custom Objects with Blender
## Blender preparation
[Preparing your Blender scene](~blender-prep)

The next section will cover the common settings you should mess with when working in Blender. If you already have a solid grasp of what you should configure in Blender then go ahead and skip this section. 

## Render model creation and importing
[Making and importing a custom object render model](~blender-object-creation-render)

The next section will show the user how to create a simple custom object render mesh that can be imported in Halo to make a valid scenery object.

# Importing Custom Textures
## Setting up materials in Blender
[How to set up Materials in Blender for use in Halo](~blender-object-creation-materials)

This section will go over how to set up materials within Blender for use on custom objects in Halo 3. This will explain naming conventions, using custom textures, the basics of UV unwrapping, and shader and bitmap tag creation in Guerilla.