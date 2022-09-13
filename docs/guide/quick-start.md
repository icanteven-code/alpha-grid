# Quick Start

For installing and using the library you have 2 choices
- [How to use with CSS](./css.md)
- [How to use with SASS/SCSS](./sass.md)

The process is almost the same, but some details vary between the 2 options.

## Bundles
There are prebuild bundles you can choose from for both CSS and SCSS. This way you can take out the utilities you will not use. Each bundle contains all responsive prefixes for its features.
- `agrid.css/scss` - all available utilities
- `agrid-base.css/scss` - `grid` + `columns`
- `agrid-offset.css/scss` - `grid` + `columns` + `offset`
- `agrid-order.css/scss` - `grid` + `columns` + `order`
- `agrid-gap.css/scss` - `gap`

::: warning
⚠️ The gaps are very specific utilities and probably you will almost never will need to use them. In any case, if you want to use them you need to load them **additionally** to a bundle of your choice. The `agrid.scss` (all styles) contains the gaps!
:::