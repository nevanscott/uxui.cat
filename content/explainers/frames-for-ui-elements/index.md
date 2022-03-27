---
title: Frames for UI Elements
description: Use a frame to create a button element.
video: frames-for-ui-elements
---

Most user interface elements are composed of text and rectangles. However, the rectangle tool in Figma is usually not the best choice for drawing the background shape of a UI element. Instead, it is usually better to use something which in Figma is called a frame.

Unlike a rectangle layer, think of a frame as a container element, which other layers can be placed inside. Like a rectangle layer, a frame can have properties like a background fill, rounded corners, and effects like a drop shadow. The elements inside of a frame will always be drawn (or rendered) on top of the frame.

Let’s see how this works by creating a button.

Creating a frame is almost exactly the same as drawing a rectangle. Use the frame tool by clicking on its icon in the toolbar or using the keyboard shortcut F. Then draw the frame on the canvas, just like drawing a rectangle. The frame also appears in the layer list, with an icon indicating it is a frame layer. I can rename the layer by double-clicking on the layer in the layer list, or by double-clicking on its name in the canvas.

I’ll add a text layer for the button, which I’ll label “Compose”. I can position it in the center of the frame by dragging it and using the guides. In the layer list, the text layer appears grouped inside of the frame layer. If I drag the text outside of the frame on the canvas, the text will also move outside of the frame layer in the layer list. I’ll drag the text back into the frame. The layer list updates to reflect the change. With the text placed inside of the frame, when I drag the frame to move it around on the canvas, the text moves together with the frame.

I’ll change some properties on the text and the frame to make it look more like a button. The properties for the frame layer in the design panel are the same as the properties available for a rectangle layer.

There we have it: a button element made up of a text layer inside of a frame.
