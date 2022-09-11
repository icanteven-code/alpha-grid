# Quick Start - CSS

The CSS styles are provided in 2 ways - the whole package (grid, gaps, order, offset) or as predefined packages, where you can choose what you don't need and trimm the size down.

⚡ **Compression** - All css files are minified and provided also compressed via **gzip** `.min.css.gz` or **brotli** `.min.css.br`. To use a compressed version just add the extention (`.gz`/`.br`) to the end of your CDN link or download that specific file.

## Entire alphaGrid

### CDN
Load the **entire** `agrid` styles (grid, gaps, order, offset) in your project in your html file
```
<link rel="stylesheet" href="https://unpkg.com/alpha-grid@1.4.0/dist/agrid.min.css" />
```
or inside a css file with `@import`
```
@import url('https://unpkg.com/alpha-grid@1.4.0/dist/agrid.min.css');
```

### Download
You can directly download the project from [GitHub](https://github.com/icanteven-code/alpha-grid), go to the `dist` folder and copy the `agrid.min.css` file to your project.


## Bundles by features
You can choose from these prebuild bundles. Each bundle contains all responsive prefixes for its features.
- `agrid-base.css` - `grid` + `columns`
- `agrid-offset.css` - `grid` + `columns` + `offset`
- `agrid-order.css` - `grid` + `columns` + `order`
- `agrid-gap.css` - `gap`

::: warning
⚠️ The gaps are very specific utilities and probably you will almost never will need to use them. In any case, if you want to use them you need to load them **additionally** to a bundle of your choice. The `agrid.css` (all styles)contains the gaps!
:::


### CDN
Use the same syntax from the above example [Entrire alphaGrid](css.md#) and replace the links with the bundle of your choice:

- `agrid-base.css` - `https://unpkg.com/alpha-grid@1.4.0/dist/agrid-base.min.css`
- `agrid-offset.css` - `https://unpkg.com/alpha-grid@1.4.0/dist/agrid-offset.min.css`
- `agrid-order.css` - `https://unpkg.com/alpha-grid@1.4.0/dist/agrid-order.min.css`
- `agrid-gap.css` - TBD

### Download
You can directly download the project from [GitHub](https://github.com/icanteven-code/alpha-grid), go to the `dist` folder and select one of the `.min.css` files for your desired bundle.