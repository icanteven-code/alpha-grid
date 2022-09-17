# 🧱 αGrid - Light CSS Grid system

[![npm](https://badgen.net/npm/v/alpha-grid)](https://www.npmjs.com/package/alpha-grid)   [![bundlephobia min](https://badgen.net/bundlephobia/min/alpha-grid)](https://bundlephobia.com/package/alpha-grid@1.5.0)    [![bundlephobia minzip](https://badgen.net/bundlephobia/minzip/alpha-grid)](https://bundlephobia.com/package/alpha-grid@1.5.0)    [![Netlify Status](https://api.netlify.com/api/v1/badges/d8cddbf0-a67c-4a0d-a6e7-4745500f75ae/deploy-status)](https://app.netlify.com/sites/alpha-grid/deploys) 


Agrid's entire CSS bundle is ~ 19.0 kB (2.1 kB gzip), but the core grid-systems is ~ 9.4 kB (1.0 kB gzip).

<br />
📌 **Examples** - [alpha-grid.netlify.app](https://alpha-grid.netlify.app/) 
<br/>
<br />

**alphaGrid** is a tool for implementing 12 Column Grid layouts. Very simple. Mostly configurable. CSS & SCSS. 
Based on CSS Grid ([96.3% support](https://caniuse.com/?search=grid)) and it's pretty much a thinkered version of Bootstrap's 12-Column-Grid system.




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
- OR add only the bundle you need (more about the different bundles bellow) - again supports both CSS and SCSS files

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

## Bundles
You can decide on which features you need and import only them:
- `agrid.css/scss` - all utility classes
- `agrid-base.css/scss` - only the `columns` + responsive prefixes
- `agrid-offset.css/scss` - `columns` + `offset` + responsive prefixes
- `agrid-order.css/scss` - `columns` + `order` + responsive prefixes


## Why
After couple of discussion about using 12-col-grid system in an internal work project I started thinking about creating my own grid system for personal projects and also to play around a little bit more with grid and SASS' mixins. 
This is probably not worthy of your time, but I had really fun time searching around @each, @mixin, etc. and hopefully will use the system soon. 