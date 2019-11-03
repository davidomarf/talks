---
title: A walked-through introduction to generative art
date: "2019-08-26"
thumbnail: ./domino-dancing-inverted.png
---

Over the last one and a half years, I've been having a lot of dispersed ideas about generative art.

This article was written to synthesize those ideas into a single, coherent, robust, and extensive work.

This text provides most of the content I'll use in talks about generative art, so
I'll always reference it for those who are interested in reviewing it at their own pace, without
having to look or listen to my dumb face and voice.

## Art

Across time, there have been several theories and definitions of art. But so far, not a single one
has been universally accepted, and most likely will never be.

I believe in the theory that humans evolved an _art instinct_ as a result of sexual
selection, prompting aesthetic evolution in humans.[^miller2011]

After that premise, I trust that my gut is enough to decide if something is art (although not enough
to decide if something **is not art**).

If I find a work aesthetically pleasing, and I consider it art, it is. Same for you.

## Generative

This is the word used to define something capable of production, or reproduction.

There is generative grammar, which uses a set of rules to generate grammatically correct sentences. Or
generative programming, in which a compiler allows the programmer to write at a higher level of
abstraction.

Mathematically, a generative system is one that uses just a few basic rules to yield patterns that can be
extremely varied and unpredictable.

## Generative Art

Generative art is the beautiful and interesting result of mixing generative systems and art.

A piece of generative art is a work that was fully or partially produced by the assistance of a generative
process.

The generative art movement started with computer-generated graphics, or more properly, algorithmic art.

The first public works of algorithmic art are due to Nees Georg, exhibiting his work in the
_Ästhetisches Colloquium_, in February 1965. [^compartgeorgnees]
Frieder Nake is also considered one of the founding fathers of digital computer art. Producing works
since 1963, he exhibited them first at the _Galerie Wendelin Niedlich_ in 1965. [^compartfriedernake]

In 1965, Steve Reich played _It's gonna rain_, a song that consists of a loop of a preacher saying
"it's gonna rain", being played in two machines at once. Because of the inconsistency of the speed
of the machines they gradually slip out of sync with one another. [^eno1996]

Inspired by Steve Reich's work, Brian Eno composed _Ambient 1: Music for Airports_ in 1978, based on the same principle. [^eno1996]

Another field that applied the ideas of generative art, was architecture and urban design, with
Celestino Soddu's book _Citta' Aleatorie_ in 1989. [^soddu1989]

Literature has also had sprungs of generative art. The cut-up technique consists of cutting a written text and
rearranging it to create a new text. Jackson Mac Low produced computer-assisted poetry in 1969. [^tardos]
Philip M. Parker developed software to automatically produce a set of books from a template, filled with
data from a data base or from internet searches. [^parker2007]

As you can see, there are several types of generative art.
However, for the rest of this guide, I'll be focusing on algorithmic visual art.

## How to start

As noted previously, this (and later) sections are focused on algorithmic visual art.
However, the basic outline can be reinterpreted to another type of generative art.

### Knowing the processes

The production of a work will commonly go through at least two processes:

- **Generation**: designing the algorithms that will generate the data of your work.
- **Drawing**: displaying your work in the screen.

For convenience, I'll explain the drawing process first.

#### Drawing

To draw your work, you need to know the canvas.

In our case, our canvas will be the screen. (If you decide to plot your works, your canvas will
be any physical material you want, but most of the time, you'll deal with the screen).

The screen displays images using pixels, and you can explore those pixels using a cartesian plane.

In the screen, each coordinate represents a pixel. The coordinate (0, 0) is in the top left pixel, with
the x-axis running from left to right, and the y-axis from top to bottom.

Now, we could handle the reading and writing of those pixels all by ourselves. But, at least for me,
that would make this task burdensome instead of funny and engaging. Fortunaley, we can rely on libraries
that do that for us, giving us function to draw lines, circles, rectangles, etc.

I'll assume we have those functions: `line`, `circle`, `rectangle`.

To draw a point in the screen, then, we need to specify the coordinates we want to draw it in:

```javascript
point(x, y);
```

To draw a line, we need a starting point `a` and an end point `b`:

```javascript
line(a.x, a.y, b.x, b.y);
```

And for a rectangle, we can specify two opposite corners.

```javascript
rectangle(a.x, a.y, c.x, c.y);
```

Or the first corner and the height and width values.

```javascript
rectangle(a.x, a.y, width, height);
```

This will depend on the library we use, so I'll leave it there.

The only thing I'd like you to do, is to get familiar with specifying points on the screen with
a cartesian plane with the y-axis being upside-down.

#### Generation

Although the quantity of algorithms you could come up with to generate the data is infinite, you can
start experimenting with some common patterns.

This is by no means a correct typology, much less a universally accepted one. This is just a list
reflecting my perceptions.

- **Recursive algorithms**
  : Algorithms built upon the concept of recursion. Repeating one process until you reach a base case.

  They get more interesting when you add randomness to the way the recursive calls are made. For example,
  you can change the conditions of the base case, the number of recursive calls, or the arguments you call
  the recursive function with.

  ![Triangle Subdivision, original content](./davidomarf-triangle-subdivision.png "Triangle Subdivision, original content")
- **Particle Interaction**
  : Algorithms that make the rules of interaction between many particles, that are later left to their
  own for many cycles (or generations). These algorithms are prone to the emergence of patterns we didn't
  expected.

- **Genetics-inspired algorithms**
  : I don't mean using genetic algorithms, but algorithms that try to abstract the ideas of inherability.
  These ideas mix well with recursive algorithms, producing clusters of characteristics that get
  inherited in specific "families" / branches of the population.

- **Equation-based algorithms**
  : Built using simple mathematical expressions. One common subset of these algorithms is the attractor.
  They are a set of differential equations that, upon choosing one starting point on the plane/space, compute
  as many new points 

  ![Attractor, original content](./davidomarf-attractor.jpg "Attractor, original content")
- **Cellular automata**
  : Grid of values that evolve over time by following some interaction rules based on the current values
  of the closest neighbours.

(ask miguelito permission to show his algorithm)

- **Perlin Noise**
  : Function that produces a grid of gradient values, the computation of the dot products, and the
  interpolation between those values. This function (and other noise-producing algorithms) are useful to
  produce noise fields, that can be then treated as heightmaps or heatmaps.

  ![Shallow water, by u/naskou](./naskou-shallow-water.jpg "Shallow Water, by u/naskou")

- **Any Other Algorithm you can think of**
  : Any sort algorithm? You can turn the process and the intermediate steps into beautiful graphics.
  Search algorithms? Matching algorithms? Caching algorithms? They all have steps that contain the data
  that you can turn into an art piece.

  ![Shell Sort, by u/reallymeannuns](./reallymeannuns-shell-sort.jpg "Shell Sort, by u/reallymeannuns")

  ![Quick Sort, by u/reallymeannuns](./reallymeannuns-quick-sort.jpg "Quick Sort, by u/reallymeannuns")

#### Colors

By being familiar with screens and computation, you'll most likely know how to use RGB colors, which
are directly translated into hexadecimal colors, but there are more color spaces.

My favorite space so far is HSL, or HSB, which stands for Hue, Saturation, and Lightness/Brightness.
It's easier to produce colors when modifying values in these space, than doing it so in RGB.

The Hue is the main color you'll work with. It goes from 0 to 360 and can be produced by picturing
the main colors at 0, 120, 240, and interpolating over them.

The other two values represent the saturation and lightness.

I've found it's easier to build palettes with these method.

(Link to video about mixing color)

### Setting up a framework

You need a programming/scripting language and a way of producing graphics (usually via
a library).

There are a lot of alternatives, but the most common one is using
[Processing](https://processing.org/), a programming language built "to learn how to code
in the context of visual arts".

Its community is really big, and you'll find a lot of resources and help online.
This is probably the safest route.

The team behind Processing also developed P5.js, a JavaScript library with the same goal.

I use P5.js, and I think I'd use it again if I were to start again from the beginning.

To set up a framework with P5.js, you only need a text editor, the library files (which you can
download or import from a CDN), and a web browser.

But again, you can set up any custom framework, for example:

- Benjamin Kovach has written about his stack in
  [Generating artwork with Haskell](https://www.kovach.me/posts/2018-03-07-generating-art.html), using
  Cairo as the graphics library.

-Tyler Hobbs wrote [Using Quil for Artwork](https://tylerxhobbs.com/essays/2015/using-quil-for-artwork),
which is a Clojure library.

- Anders Hoff developed _snek_ in Common Lisp: [SNEK is not an acronym](https://inconvergent.net/2017/snek-is-not-an-acronym/).

## Quick code examples

(Include some examples of code with their own result, using some of the methods
and tools listed before, with a walkthrough)

(Show the triangulation code to exemplify the sweet spot between order and disorder,
to exemplify about inherability)

(Show another code tthat uses noise fields to produce art)

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

Picasso produced more than 50,000 works. Van Gogh produced more than 2,000.

- **Follow other artists, and interact with them**
  : I've found that most of the time, they'll be chill af. There are communities that focus on
  generative art. If you want to find the community inside a certain social network, search for
  "generative".

## Further

This article was only focused in producing digital images, but the principles
about knowing your basic tools, and the methods to abstract and produce ideas,
are still valid in other types of generative art.

## Where to get inspiration

There is a famous quote that goes "Good artists copy; Great artists steal". Well, don't do it literally,
you could pass as a dishonest person with no sense of dignity in the best scenario, or get in serious legal troubles
in the worst.

But still, it's a good idea to look at other people works to develop some ideas. The following lists link
to some resources I use to find inspiration, or just appreciate. The order is alphabetical.

### Artists

- Bell, Renick: [renickbell.net](http://www.renickbell.net/)
- DesLauriers, Matt: [mattdesl.com](https://www.mattdesl.com/)
- Golid, Kjetil: [generated.space](https://generated.space)
- Hobbs, Tyler: [tylerxhobbs.com](https://tylerxhobbs.com)
- Hoff, Anders: [inconvergent.net](https://inconvergent.net/)
- Kovach, Benjamin: [kovach.me](https://www.kovach.me/art.html)
- Lorusso, Nicola: [art.spatial-matters.com](https://art.spatial-matters.com/)
- Ogg, Caleb: [ig@iso.hedron](https://www.instagram.com/iso.hedron/)
- Penne, Aaron: [aaronpenne.com](http://aaronpenne.com/)
- "inthepatterns": [ig@inthepatterns](https://www.instagram.com/inthepatterns/)

### Communities and hubs

- [r/generative](https://www.reddit.com/r/generative/)
- [ig@creativecodeart](https://www.instagram.com/creativecodeart/)

[^compartfriedernake]: compArt database Digital Art (n.d.). _Frieder Nake | Database of Digital Art_. [online] Dada.compart-bremen.de. Available at: http://dada.compart-bremen.de/item/agent/68 [Accessed 27 Aug. 2019].
[^compartgeorgnees]: compArt database Digital Art (n.d.). _Georg Nees | Database of Digital Art_. [online] Dada.compart-bremen.de. Available at: http://dada.compart-bremen.de/item/agent/15 [Accessed 27 Aug. 2019].
[^eno1996]: Eno, B. (1996). _Generative Music_. Presented at the Imagination Conference, San Francisco.
[^miller2011]: Miller, G. (2011). _The Mating Mind: How Sexual Choice Shaped the Evolution of Human Nature_. New York: Anchor Books.
[^parker2007]: Parker, P. M. (2007). _Method and apparatus for automated authoring and marketing_. U.S. Patent 7,266,767.
[^soddu1989]: Soddu, C. Citta' Aleatorie, Masson Publisher 1989.
[^tardos]: Tardos, A. (n.d.). _Jackson Mac Low - Long Biography_. Retrieved from http://www.jacksonmaclow.com/long-bio.html
