---
title: Resizing with Auto-layout
description: Set the size of a button based on its contents.
video: resizing-with-auto-layout
weight: 4
---

User interfaces generally need to be designed for flexibility, so they can be rendered correctly and usably on different size devices, in different sized windows, and with a variety of content. One of the tools Figma offers to help design flexible user interface elements is called auto-layout.

Auto-layout can be applied to any frame in Figma. When a frame has auto-layout enabled, we can give instructions about how the frame’s size should be determined, and how the layers inside of the frame should be laid out next to each other. Auto-layout is a powerful tool, with many applications. For now, let’s use it to determine the size of an element based on the length of the text inside it.

To see this in action, we turn to the humblest UI element, an unassuming button.

A button is generally made of two pieces: a frame with a piece of text inside it. I have a button already prepared in this way. Here’s the frame, called Button, and here’s the text label, which says “Compose”.

As built, this button is not very flexible. I’ll change the text of the label from “Compose” to “Send”. The size of the button frame is fixed, so changing the text does not affect the size of the button. I could recenter the label using the guides. I could also resize the frame to shrink to the text.

Now I’ll change the text again to say “Remind me later”. The text is now too long for this button. Again, I can manually resize it.

Let’s try this again, using auto-layout to describe how the frame should be sized based on its contents. I’ll select the button frame and enable auto-layout in the design panel. Now I’ll try changing the text again, back to “Send”. The width of the button frame now changes automatically, maintaining the spacing between the edges of the frame, and the text layer inside it.

If I change the text back to “Compose”, the frame responds again. The frame maintains the space between its edges and the edges of the layers it contains.

This works in a vertical direction for the height as well. If I increase the font size of the text, the whole button will grow in response to the change.

Now I have a flexible button element, whose height and width are determined by the size of the text layer inside it.
