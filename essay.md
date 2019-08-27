---
title: A walked-through introduction to generative art
date: "2019-08-26"
thumbnail: ./domino-dancing-inverted.png
---

Over the last one and a half year, I've been having a lot of dispersed ideas about generative art.

This article was written with the goal to synthetize those ideas into a single, coherent, robust,
and extensive work.

This text provides most of the content I'll use in talks about generative art, so
I'll always reference it for those who are interested in reviewing it at their own pace, without
having to look or listen to my dumb face and voice.

## Art

Across time, there have been several theories and definitions of art. But so far, not a signle one
has been universally accepted, and most likely will never be.

Personally, I believe in the theory that humans evolved an _art instinct_ as a result of sexual
selection, prompting aesthetic evolution in humans.

After that premise, I trust that my own gut is enough to decide if something is art (although not enough
to decide if something **is not art**).

If I find a work aesthetically pleasing, and I consider it art, it is. Same for you.

## Generative

This is the word used to define something that is capable of production, or reproduction, via a set of
rules.

There is generative grammar, which uses a set of rules to generate gramatically correct sentences. Or
generative programming, in which a compiler allows the programmer to write at a higher level of
abstraction.

Mathematically, a generative system is one that uses just a few basic rules to yield patterns that can be
extremeley varied and unpredictable.

## Generative Art

Generative art is the funky but beautiful and interesting result of mixing generative systems and art.

A piece of generative art, is a work that was fully or partially produced by the assistance of a generative
process.

The history of generative art is well documented. It is considered to have begun in 1965 when Nees Georg and
Frieder Nake shared their work.

There are a lot of types of generative art:

- Music
- Visual Art
- Software art
- Architecture
- Literature

## How to start

As noted previously, the following section will help you develop a mindset to get into generative art,
but they are meant to be a guide to produce digital images. Nonetheless, they will serve as a general
outline to every type of generative art, and can be extrapolated by getting the mindset, not the specific
instructions.

### Knowing the tools

You'll have two kind of tools available to you:

- **Generation tools**: how is data generated. 
- **Representation tools**: how are things actually drawn on the screen. These are the tools that translate
  your data into what you see.


#### Representation tools

- You'll mostly work with the cartesian plane. It could be alternatives to it, but not that I know about.
  And when you work with the cartesian plane, you need to know your coordinates. At least x and y.
- With coordinates, you can produce points.
- By joining points, you can produce lines.
- You can perturbate lines using extra points to produce curves.
  - Beizer curves.

#### Generation tools (algorithms)

- Recursion
- Particle Interaction
- Genetic rules
- Equation base algorithms
- Cellular automata

### Setting up a framework

My framework consists of writing code in JavaScript and using P5.js to
produce images.
Some advantages of this is that:

- If you are comfortable writing C-like code, picking up JavaScript is not very difficult.
- P5.js is a ready-to-use library.
- You only need a text-editor, the library files (either downloaded or included from a CDN), and a web browser.

(Add links to p5js and some tutorials)

But it's possible to create your own framework using any language and a library to produce graphics.

(link to haskell, lua, etc. frameworks)

## Quick code examples

(Include some examples of code with their own result, using some of the methods
and tools listed before, with a walkthrough)

## Tips

There are a some things that I currently do, that I wish I had started doing them way before.
This would be the answer to the question "What would yo do if you were to start again from
the beginning?"

- **Using seeds**
  : Seeds for the random or noise functions will make those functions deterministic by always
  returning the same values. This will let you see more easily how a single change in the code
  affects the final image, without you having to distinguish them between two completely different
  works.

- **Embracing the mistakes**
  : If you have a good idea and when implementing it, you find it's a faulty implementation, don't
  try to stick with the original idea at all costs. Sometimes branching ideas is a good decision.

- **Perfect is the enemy of done**
  : Don't keep improving an idea that you've already spent too much time on, if those improvements
  aren't great. Just consider it finished for now, and move to a new project. This will keep the
  inertia

- **Be prolific, not a genius**
  : Related with the last one, don't try to produce a single perfect piece of art. Seek quantity.
  I know it may sound wrong. But by doing a lot of works you'll practice, you'll learn, and you'll
  become more variated. The odds of producing one great work is bigger if you have a lot of works.

## Further

This article was only focused in producing digital images, but the principles
about knowing your basic tools, and the methods to abstract and produce ideas,
are still valid in other types of generative art:

- Musikalisches Würfelspiel, using dices to produce music from precomposed options.

- Algorithmic composition, to produce music.

Some ideas that are strongly used in one type of generative art, could be used in
digital images as well.
