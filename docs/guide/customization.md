# Customization

We're using SASS' `@use` syntax, which enables us to modify and customize almost everything from our utilities. This is done with the syntax described here [@use configuration](https://sass-lang.com/documentation/at-rules/use#configuration).

When customizing via SCSS variables and maps, we suggest to import the utilities by the modules, not bundles.

```scss
@use "alpha-grid/dist/scss/modules/modules/base" as * with (
  $agrid-column-system: 4,
  $agrid-breakpoints: (
    "xs": 500px,
    "md": 700px,
    "lg": 1000px,
  ),
  $agrid-gaps: (
    "1": 1rem,
    "2": 2rem,
    "3": 3rem,
  )
);
@use "alpha-grid/dist/scss/modules/modules/columns";
@use "alpha-grid/dist/scss/modules/modules/offset";
@use "alpha-grid/dist/scss/modules/modules/order" with (
  $agrid-order-count: 4
);
@use "alpha-grid/dist/scss/modules/modules/gaps";

@include columns.generate-static-cols;
@include columns.generate-resp-cols;

@include offset.generate-static-offset;
@include offset.generate-resp-offset;

@include order.generate-static-order;
@include order.generate-resp-order;

@include gaps.generate-static;
@include gaps.generate-responsive;
```

## Grid & Breakpoints

- Number of columns inside `agrid` - `$agrid-column-system`, default value `12`
- Responsive breakpoints and their prefixes - `$agrid-breakpoints`, defaults to 
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

**Example**
```scss
@use "alpha-grid/dist/scss/modules/base" as * with (
  $agrid-column-system: 4,
  $agrid-breakpoints: (
    "xs": 500px,
    "md": 700px,
    "lg": 1000px,
  )
);
```

## Order

The `order` utilities - `$agrid-order-count`, defaults to 11 values (`order-1` - `order-12`)

**Example**
```scss
@use "alpha-grid/dist/scss/modules/order" as * with (
  $agrid-order-count: 4
);
```


## Gap

The `gap` utilities - `$agrid-gaps`, defaults to 12 values (`gap-1` - `gap-12`) with a step of `0.25rem`

**Example**
```scss
@use "alpha-grid/dist/scss/modules/base" as * with (
  $agrid-gaps: (
    "1": 1rem,
    "2": 2rem,
    "3": 3rem,
    ...
  )
);
```