# 🧱 αGrid - 9.43kB CSS Grid system

[![Netlify Status](https://api.netlify.com/api/v1/badges/d8cddbf0-a67c-4a0d-a6e7-4745500f75ae/deploy-status)](https://app.netlify.com/sites/alpha-grid/deploys) <br/>


📌 **Examples** - [alpha-grid.netlify.app](https://alpha-grid.netlify.app/) <br/>

**alphaGrid** is a tool for implementing 12 Column Grid layouts. Very simple. Mostly configurable. CSS & SCSS. 
Based on CSS Grid ([93.53% support](https://caniuse.com/?search=grid)) and it's pretty much an "inspired" clone of Bootstrap's own grid layout.


- [Getting started](#getting-started)
  - [NPM](#npm)
  - [CDN](#cdn)
- [Usage](#usage)
  - [CSS Classes](#css-classes)
  - [Static & Responsive classes](#static--responsive-classes)
  - [Breakpoints](#breakpoints)
- [Bundles](#bundles)
- [Customization](#customization)
  - [Customizing breakpoints - SASS](#customizing-breakpoints---sass)

------

## Getting started

### NPM
- Install package
```
yarn add alpha-grid
OR 
npm i alpha-grid
```
- Add the full agrid module (CSS or SCSS) to your project

```
CSS Minified
@import url("alpha-grid/dist/agrid.min.css")

SCSS
@use "alpha-grid/dist/scss/agrid.scss";
```
- OR add only the bundle you need (more about the different budles bellow) - again supports both CSS and SCSS files

```
SCSS
@use "alpha-grid/dist/scss/agrid-order.scss";
```

### CDN
Load the `agrid.css` file in your project
```
<link rel="stylesheet" href="https://unpkg.com/alpha-grid@1.4.0/dist/agrid.min.css" />

OR

@import url('https://unpkg.com/alpha-grid@1.4.0/dist/agrid.min.css');
```

## Usage
### CSS Classes
After loading the css you will have access to some new classes:

- `agrid` - GRID class: the main class, use it when you want to make a certain container element a grid
- `acol-[1-12]` - Columns classes: defines how much column spaces our child element should take, should be used only inside a container with `agrid` class. `acol` can be set between 1 and 12 (number of columns).
- `acol-offset-[1-11]` - Column offset: 
  - When you use the offset class `acol-offset` for your columns, you define an empty space ("offset") on the left side of your column. This offset space is again calculated by the space of a column. acol-offset-2 means that you will have an empty space equal to the width of 2 columns left of your targeted element.
  - Offsets support both static and responsive workflow - acol-offset-2 OR md:acol-offset-2.
  - Important: While all other classes support values from 1 to 12, offset supports from 1 to 11! Setting an offset of 12 will mean to push your element to a new line, which you can easily do with a new agrid container. 
- `acol-order-[1-11]` - Column order: In CSS Grid you have access to a `order` property, with a default value of `0`. To move around specific elements we can use the `acol-order` class to change the order value. 
  - `acol-order` supports both static and responsive syntax. 
  - Examples:
    - `acol-order-first` sends the element to the start of the grid with `order: -1`
    - `acol-order-last` sends the element to the end of the grid with `order: 12`
    - `acol-order-{1-11}` (max. 11) sets order: {1-11}

### Static & Responsive classes
Using a class like `acol-6` defines a column with a width of 50% that will have this value in all possible viewports and sizes - this is a "static" class, the value never changes.

Probably in all of our cases we'll need to change the width of the layout and here come the "responsive" classes - they're completely the same as all other classes, but have prefixes before them.

Responsive prefixes `[sm,md,lg,xl]:`  (if you've used Tailwind, this will be familiar)
  - Syntax - `sm:acol-2 md:acol-order-end lg:acol-offset-6`
  - Supports all utilities - `acol`, `offset`, `order`
  - With these we can set a specific breakpoint for our viewport, from witch and above (min-width) we apply the desired column size. If the viewport is smaller than the breakpoint you have selected, a smaller breakpoint value will be used **if provided** and if no smaller value is possible, the value is set to the base `agrid-12` or in the other cases `agrid-offset` and `agrid-order` are unset.

### Breakpoints
As touched in the previous point, we have columns that are working for specific viewport sizes or breakpoints. These breakpoints are:

| Prefix | Breakpoint |
| ------ | ---------- |
| sm     | ≥ 576px    |
| md     | ≥ 768px    |
| lg     | ≥ 992px    |
| xl     | ≥ 1200px   |

## Bundles
You can decide on which features you need and import only them:
- `agrid.css/scss` - all utility classes
- `agrid-base.css/scss` - only the `colums` + responsive prefixes
- `agrid-offset.css/scss` - `colums` + `offset` + responsive prefixes
- `agrid-order.css/scss` - `colums` + `order` + responsive prefixes

## Customization
alphaGrid was built with the idea of customizing as much as possible, so to achieve that we use css custom properties, which you can overwrite if needed. When changing these it should be better to scope them to the `agrid` class.

| Variable          | Default value | Description                                                                                                                         |
| ----------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| --agrid-gap       | 0.25rem       | Used for setting the `gap` size of our grid. Default values: `[sm] -> 0.25rem`, `[md] -> 0.75rem`, `[lg] -> 1rem`, `[xl] -> 1.5rem` |
| --agrid-x-padding | 0px           | Possibility to set padding left & right of the grid                                                                                 |
| --agrid-x-margin  | 0px           | Possibility to set margin left & right of the grid                                                                                  |

To overwrite these default variables you need to define your own values after the `agrid.css` is added. This is the whole control you have with simple css.

### Customizing breakpoints - SASS
You have also the possibillity to overwrite and change the responsive prefixes - change the breakpoints, remove, add or completely rename the casses. This can be done **only via SCSS** -  load the SASS version `/dist/agrid.scss` and then you will have access to extend the SASS variables and have even more control. This requires you to have your own SASS compiling step in your app.

SASS Example
```
@use "alpha-grid/dist/scss/modules/_base.scss" with (
  $agrid-breakpoints: (
    "xs": 460px,
    "sm": 576px,
    "md": 768px,
    "lg": 992px,
    "xl": 1200px,
    "xxl": 1440px,
  )
);
@use "alpha-grid/dist/scss/agrid.scss"; // Or any other bundle
```

## Why
After couple of discussion about using 12-col-grid system in an internal work project I started thinking about creating my own grid system for personal projects and also to play around a little bit more with grid and SASS' mixins. 
This is probably not worthy of your time, but I had really fun time searching around @each, @mixin, etc. and hopefully will use the system soon. 