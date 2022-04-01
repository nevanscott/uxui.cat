---
title: Simplified Github Navigation
description: Create a simplified navigation header based on Github’s user interface, using Frames and Auto Layout.
video: simplified-github-navigation
weight: 7
topics:
  - Figma
  - Interface Layout
  - Flexible Layout
  - Colors
---

It’s time to put what you’ve learned into practice by building out a user interface in Figma. For this exercise, you’ll create a simplified navigation header based on the user interface of Github. This is an opportunity to practice using Frames and Auto Layout.

Let’s take a look at what you’ll be creating. Github is a platform for managing and sharing codebases. This is a simplified version of part of their user interface, which users see when browsing any particular codebase, or repository.

On the top left, visitors have access to a breadcrumb-style navigation, which shows a link to the user or organization which owns this project, followed by a link to the root (or top-level) folder of the project. These are separated by a light forward slash.

On the top right are a series of buttons for actions a visitor can take on this project.

- They can “sponsor” the project by contributing funding to it.
- They can “watch” the project in order to get notifications when there are updates.
- They can “fork” the project to make an editable copy for themselves.
- And finally, they can “star” a project to save it to a list of favorites.

Below these is a set of tabbed navigation for the project.

- Under “Code”, users see a listing of the code files in the project.
- Under “Issues”, users see things like bug reports or feature requests.
- Under “Pull Requests”, users see suggested changes which are being considered.
- Under “Actions”, users see any automations which have been enabled.
- Under “Projects”, users see project planning and status.
- Under “Security”, users see automated recommendations about the security of the codebase.
- Under “Settings”, users see a variety of configuration options.

As the designer for this project, each of these interface areas is a good opportunity to use Auto Layout: the buttons, the tabs, and the breadcrumbs.

As you work to create this interface, keep the following points in mind:

- For areas with a background color and layers inside of them, it is generally better to use a Frame instead of a Rectangle layer.
- Auto Layout can be used to control padding, the space between the outer edge of a frame, and the content inside it.
- Auto Layout can also be used to control the spacing between layers or elements.
- Select multiple layers on the canvas at the same time to make changes to all of them in the design panel. This can be especially useful for modifying colors under “Selection colors”.

If you’d like an extra challenge when you’re finished, try making a new version of the completed UI, this time in dark mode.
