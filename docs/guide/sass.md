# Quick Start - SASS/SCSS

The CSS styles are provided in 2 ways - the entire package (grid, gaps, order, offset) or as predefined packages, where you can choose what you don't need and trimm the size down.


## Installation

### NPM
1) Install the package
   
```
npm i alpha-grid
OR
yarn add alpha-grid
```

2) Add the full agrid module to your project

`@use "alpha-grid/dist/scss/agrid.scss";`

OR add only the bundle you need - [more about the bundles bellow](/guide/sass.md#bundles-by-features)

`@use "alpha-grid/dist/scss/agrid-order.scss";`



### CDN
You can find all available SASS files via a CDN link from UNPKG. You can browse the [files in UNPKg](https://unpkg.com/browse/alpha-grid@1.4.0/dist/) and select the desired bundle. Generally we suggest to install agrid via NPM.

### Download
You can directly download the project from [GitHub](https://github.com/icanteven-code/alpha-grid), go to the `dist/scss` folder and copy the desired `.scss` file to your project.


## Bundles by features
You can choose from these prebuild bundles. Each bundle contains all responsive prefixes for its features.
- `agrid.scss` - all available utilities
- `agrid-base.scss` - `grid` + `columns`
- `agrid-offset.scss` - `grid` + `columns` + `offset`
- `agrid-order.scss` - `grid` + `columns` + `order`
- `agrid-gap.scss` - `gap`

::: warning
⚠️ The gaps are very specific utilities and probably you will almost never will need to use them. In any case, if you want to use them you need to load them **additionally** to a bundle of your choice. The `agrid.scss` (all styles) contains the gaps!
:::

## Customization
::: tip
You can find specific customization examples at the end of each utility page.
:::

We're using SASS' `@use` syntax, which enables us to modify and customize almost everything from our utilities. This is done with the syntax described here [@use configuration](https://sass-lang.com/documentation/at-rules/use#configuration).


*Example*
```scss
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
```

Currently you can customize the:
- Number of columns inside `agrid`
  - `$agrid-column-system`, default value `12`
  - you can set any number for the grid system
  - depending on this number you will get different number of `acol-` and `offset-`classes
- Responsive breakpoints and their prefixes
  - `$agrid-breakpoints`, defaults to 
  ```
    "xs": 576px,
    "sm": 640px,
    "md": 768px,
    "lg": 1024px,
    "xl": 1280px,
    "xxl": 1440px,
    "xxxl": 1536px,
  ```
  - Limitation: The prefixes should not start with a number, eg. `2xl`, `3xl`, etc.
- The `gap` utilities
  - `$agrid-gaps`, defaults to 12 values (`gap-1` - `gap-12`) with a step of `0.25rem`
- The `order` utilities
  - `$agrid-order-count`, defaults to 11 values (`order-1` - `order-2`)