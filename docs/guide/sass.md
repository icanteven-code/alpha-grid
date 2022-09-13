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
