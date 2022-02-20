# αGrid

[![Netlify Status](https://api.netlify.com/api/v1/badges/d8cddbf0-a67c-4a0d-a6e7-4745500f75ae/deploy-status)](https://app.netlify.com/sites/alpha-grid/deploys)
Online example: [alpha-grid.netlify.app](https://alpha-grid.netlify.app/)

alphaGrid is a tool for implementing 12 Column Grid layouts. \
Very simple. \
Mostly configurable. \
No dependencies needed, pure css (mostly).

It's implemented via CSS Grid and it's pretty much an "inspired" clone of Bootstrap's own grid layout.

## Getting started

### Installation
Load the `agrid.css` file in your project:

As a stylesheet link
```
<link rel="stylesheet" href="https://raw.githack.com/icanteven-code/alpha-grid/master/build/agrid.css" />
```
Or via @import
```
@import url('https://raw.githack.com/icanteven-code/alpha-grid/master/build/agrid.css');
```

### CSS Classes
After loading the css you will have access to some new classes:

- `agrid` - GRID class: the main class, use it when you want to make a certain container element a grid
- `acol-[1-12]` - Columns class: defines how much column spaces our child element should take, should be used only inside a container with `agrid` class. `acol` can be set between 1 and 12 (number of columns).
- `acol-[sm,md,lg,xl]-[1-12]` - Responsive Columns class: defines how much column spaces our child element should take, should be used only inside a container with `agrid` class. With these we can set a specific breakpoint for our viewport, from witch and above (min-width) we apply the desired column size. If the viewport is smaller than the breakpoint we have selected, we use a smaller breakpoint column if provided and if we don't have smaller breakpoints, our element takes a full width, eg. 12 columns spaced. For better representation check our examples.

### Responsive breakpoints
As touched in the previous point, we have columns that are working for specific viewport sizes or breakpoints. These values are:

| Prefix | Breakpoint |
| ------ | ---------- |
| sm     | ≥ 576px    |
| md     | ≥ 768px    |
| lg     | ≥ 992px    |
| xl     | ≥ 1200px   |

### Customization
alphaGrid was built with the idea of customizing as much as possible, so to achieve that we use css custom properties, which you can overwrite if needed. All of them are scoped to the `agrid` class and they are:

| Variable          | Default value | Description                                                   |
| ----------------- | ------------- | ------------------------------------------------------------- |
| --agrid-gap       | 0.25rem       | Used for setting the `gap` size of our grid                   |
| --agrid-gap-md    | 0.75rem       | Gap size for a breakpoint: `--agrid-gap: var(--agrid-gap-md)` |
| --agrid-gap-lg    | 1rem          | Gap size for a breakpoint: `--agrid-gap: var(--agrid-gap-lg)` |
| --agrid-gap-xl    | 1.5rem        | Gap size for a breakpoint: `--agrid-gap: var(--agrid-gap-xl)` |
| --agrid-x-padding | 0px           | Possibility to set padding left & right of the grid           |
| --agrid-x-margin  | 0px           | Possibility to set margin left & right of the grid            |

To overwrite these default variables you need to define your own values after the `agrid.css` is added. This is the whole control you have with simple css.

### Customization  - SASS
alphaGrid is built via SASS because of the repetition of classes. If you wish you can load the SASS version `/src/agrid/agrid.scss` and then you will have access to extend the SASS variables and have even more control. This requires you to have your own SASS compiling step in your app.

SASS Variables
```
$agrid-column-system: 12;
$agrid-breakpoints: (
  "sm": 576px,
  "md": 768px,
  "lg": 992px,
  "xl": 1200px,
);
%agrid-col-full-width {
  grid-column: auto / span 12;
}
```

## Why
After couple of discussion about using 12-col-grid system in an internal work project I started thinking about creating my own grid system for personal projects and also to play around a little bit more with grid and SASS' mixins. 
This is probably not worthy of your time, but I had really fun time searching around @each, @mixin, etc. and hopefully will use the system soon. 