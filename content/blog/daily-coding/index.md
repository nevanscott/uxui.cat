---
title: Daily Coding
publishDate: 2020-03-07
---

A couple of months ago, as my current class was picking up speed, I had a decision to make about how I was going to structure the HTML and CSS parts of the class. I've taught HTML and CSS in what now seems like a dozen or more different ways, and the only time I remember being fully satisfied with how it went was when I was teaching a class just on front-end web development. In the context of a user experience design course, I've never really been totally happy with the results of introducing code to design students when there is so much else to learn simultaneously.


## Coding week

Sometime last year, I started moving away from the "coding week" format that's so common in design bootcamps. I've never been a fan. I don't 100% know where coding week came from originally, but I feel partially responsible for its popularity.

Sometime in early 2014, the curriculum team at General Assembly decided that their nascent UX bootcamp course UXDI needed to include some intro to frontend development, with a focus on HTML and CSS, with just a pinch of jQuery thrown in. I had just finished rewriting the first half of their part-time frontend web development course, which was essentially a crash course in HTML, CSS, and a pinch of jQuery. So, naturally, they asked me what I thought about adding a week to the UX course based on coding.

In fairness, there seemed to be good reason behind the change: the team had gotten feedback based on the job searches of early graduates from the UX program that this was a missing set of skills and knowledge. After some discussion we landed on a few possible learning goals for teaching frontend skills to design students:

- learn how to build basic websites and web interfaces in HTML and CSS
- learn how to communicate with developers who will be implementing your designs
- learn layout and other design constraints to consider when designing for the web, especially for responsive layouts

With only a week to learn, at first we determined that it may be too much of a stretch for students to accomplish the first goal. Instead we though it was reasonable to learn some HTML and CSS with the goal of improving communication and handoff to developers and designing with some technical constraints in mind.

Fast forward a few months, when I was asked to teach the UX bootcamp only to discover that the exercises and lessons I had created for the first five weeks of the part-time frontend course had been essentially compressed into five days of full time intensive classes. On top of that, students were expected to build from scratch a portfolio website they had designed the week before, without the benefit of knowing anything about the potential constraints involved—which constraints were boosted by the fact that the students were limited by what they could learn to code in only a few days.

Cue a week of intense frustration for me and more importantly the students in my class. Then cue years of design bootcamps adopting the same approach for incorporating a coding week in their classes for the same reasons.

When I showed up to teach UX/UI at Ironhack, the same format with the same challenges was in place.


## Moving away from coding week

After attempting to make coding week work in Barcelona for almost a year, I decided to try a different approach. The learning goal was still to write HTML and CSS from scratch, but I decided to spread it out. Once a week, we would have a coding day where we would learn some new things, apply them to an exercise or two, and then slowly build up a personal website with a portfolio.

Additionally, I repurposed one of the design projects focused on designing a responsive website to include a coded prototype as a deliverable, later in the course after the cycle of coding days was complete.

This change had visibly positive results even in the first attempt. More students demonstrated greater fluency with the basics, incorporated a better understanding of responsive layouts in their designs, and the teams were all able to build out one or two pages of their projects in code to demonstrate in the web browser during their presentations.

However, I also immediately noticed some issues that were difficult to overcome.

1. Since my students are almost always working on projects, taking a day or half a day to focus on something unrelated to those projects, like HTML and CSS, can be distracting and difficult to maintain focus.
2. Despite our best efforts, coding a personal website still proved a challenge for most of the students, and most still went with the default option of making their portfolio websites with a site builder.
3. The project where the students were required to build a responsive prototype to demo in browser was a group project. Our intention was that the students would collaborate more on the HTML and CSS for this project, but in most cases only one team member was responsible for this, meaning only a handful of students got the learning benefit of this application step.


## Daily coding practice

Which brings us finally to my current class, and what we tried this time to address some of these challenges. We decided to try taking the idea of spreading out HTML and CSS lessons and exercises even further by spending a few weeks of the class where we did a little bit at the end of each day, followed by small challenges for homework. This has so far worked better than I expected, and although there are still some kinks to work out, I'm excited to continue in this fashion.


### Exercises we used

<div class="examples row full-bleed">

  {{< figure
    src="tags.png"
    title="Tags"
    caption="Pill-shaped tags in two colors"
  >}}

  {{< figure
    src="news-preview.png"
    title="News preview"
    caption="Article preview from The Guardian website"
  >}}

  {{< figure
    src="news.png"
    title="News"
    caption="Structured content on La Vanguardia website"
  >}}

  {{< figure
    src="tabs.png"
    title="Tabs"
    caption="Tabbed interface for switching between content on Vueling website"
  >}}

  {{< figure
    src="hover.mp4"
    title="Button hover effect"
    caption="Screen recording with button hover effect from Dribbble website"
  >}}

  {{< figure
    src="bracelets.png"
    title="Product grid"
    caption="Card interface with a hover effect for a shopping website"
  >}}

  {{< figure
    src="button-hover.mp4"
    title="Button hover effect"
    caption="Screen recording with button hover effect from Toyota website"
  >}}

  {{< figure
    src="navigation.png"
    title="Flexbox layout"
    caption="Big navigation layout from The Guardian website"
  >}}

  {{< figure
    src="card-row.png"
    title="Nested flexbox layout"
    caption="Row of cards"
  >}}

  {{< figure
    src="lacma.png"
    title="Navigation and flexbox"
    caption="Top portion of the Lacma website"
  >}}

  {{< figure
    src="kombucha.png"
    title="Navigation and grid"
    caption="Brew Dr. Kombucha website"
  >}}

  {{< figure
    src="huckberry.png"
    title="Full layout"
    caption="Huckberry website"
  >}}

</div>


### Smaller sessions more frequently are less disruptive

I devoted about 30 minutes of each day to this, which proved to be much less of a commitment than say, 3 hours one day each week. The students were able to focus more, which was great!

Similarly, giving small assignments gave the students more manageable challenges which built their confidence in their own abilities over time.


### A surprising amount can be learned in 30 minutes

I took a component-oriented approach to this process, starting with small components like buttons and paragraphs, and working up to more complex ones like navigations and cards, finally ending by putting these together into pages.

Despite focusing on smaller pieces, the students usually seemed to grasp the value of being able to make these components themselves, and along the way were able to learn all the typical CSS things like properties, selectors, units, transitions, flexbox, and grid. We were able to go a bit deeper than in my recent classes on each of these due to our ability to apply them right away in the more contained setting of common components.


### Design tools are helping students build a more familiar mental model for CSS

I'm still teaching Sketch which uses symbols, text styles, and layer styles. Figma, XD, and Framer X have similar component-based topping built in. Maybe this is obvious, but having analogies that I can draw to the reusable styles in GUI-based design tools students are learning is helping quite a lot.


### Remaining challenges

In this class I found it difficult to get as far into CSS Grids as I would have liked, and because we took this component-based approach, we weren't able to get into strategies for managing CSS selectors like OOCSS and company.

I also still have the remaining challenge of having a group project where all this is ultimately applied, meaning that not all of the students are flexing these skills as fully in class.


## Looking ahead

Right now I intend to continue with this approach, and refine it as I go. This is a strategy that feels much more humane than any I've tried in the past. During my next class, I will probably start it a little earlier since I already have some exercises in place that I can reuse, which will hopefully allow more time to practice grid, and possibly even get into custom properties. Who knows, maybe we'll even venture a little bit into JavaScript and implement a small dark mode toggle or something like that?
