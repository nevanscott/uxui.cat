---
title: Spacing with Auto Layout
description: Control the spacing between UI elements.
video: spacing-with-auto-layout
weight: 6
---

Auto layout can be used to control two kinds of spacing. Inside of a UI element like a button, we can use auto layout to control the spacing between the edges of the frame and the edges of the text label. I have such a button here. The layer list shows an icon indicating that the frame for this button has auto layout enabled. Selecting the frame from the layer list, or on the canvas, will reveal the auto layout settings for this frame in the design panel.

Here, Figma shows the settings for this internal spacing, called padding. I can set this to a number, like 8, and the same spacing will apply on all four sides of the frame. For more granular control, expand the menu for alignment and padding options. I’ll set this frame to use 8 points of padding on the top and bottom, and 24 points of padding on both sides. Mirrored padding like this is common in user interface elements such as buttons, tabs, form fields, and cards.

In addition to controlling padding with auto layout, we can also control the spacing between layers inside an auto layout frame. This frame only has the one layer, so this setting currently has no visible effect. Spacing between layers will only be visible when there are two or more layers for Figma to apply the space between. If it helps, imagine the space between the tines of a fork with only one tine.

Let’s see this in action by creating a row of buttons. Imagine that we are designing an email app, and that we want to provide our user with a set of actions she may take after reading or skimming an email message. “Reply” is a good start. Let’s add “Reply all” and “Forward”—commonly expected tools for handling an email message.

I’ll tear away new copies and edit the labels to read “Reply all” and “Forward”. These buttons aren’t perfectly aligned or evenly spaced. Let’s use auto layout to fix that.

Drag to select all three buttons. In the design panel, Figma shows the auto layout settings which are in common between all three frame layers currently selected. Instead of modifying those, I’ll add a new auto layout frame to contain all three buttons. In the layer list, Figma shows the three buttons now grouped inside of a new auto layout frame. I’ll rename that “Button Row”.

The buttons have also been aligned with each other, and the space between them is even. In the design panel I can change this spacing, by clicking and dragging as if I were controlling a slider, or precisely by entering a number.

If I drag one of the buttons out of the frame, the layer list updates to show that it is no longer part of the same group. I can drag it back in on the canvas, and Figma will show where it will snap to. I can drag the buttons within the auto layout frame to reorder them.

Finally I’ll add one more button for “Archive”. Select the last button, and duplicate it using the keyboard shortcut command- or control-D. Figma automatically places the duplicated layer next in the list.

And there we have it: a row of buttons, whose spacing is controlled with auto layout.
