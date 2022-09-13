# Grid

aGrid supports 2 syntaxes - a **classic** style, were you directly define the number of columns (like [Tailwind's grid](https://tailwindcss.com/docs/grid-template-columns)) and **12 column** style, where you define a container splited by 12 columns and set each child element how much columns it spans inside (like [Bootstrap's grid system](https://getbootstrap.com/docs/4.0/layout/grid/)).


## Classic

This way you don't need to specify how many columns a child element should span. You create a grid with 2, 3 or however many columns and let the items to nest automatically, like a simple grid. This is done via using only th `agrid-[n]` class with the number of columns you want to create - `agrid-1`, `agrid-2`, `agrid-3`, ..., `agrid-11`. The normal `agrid` class creates 12 columns, so you can use it directly for those cases.

::: tip
The number of available `agrid-[n]` classes is alway 1 less than the number of columns set in the library (default 12). The number of `agrid-[n]` classes can be customized fully via SASS. More on this you can find here: [Customizing aGrid](../config/customizing.md).
:::

### Static grid

Static columns stay the same size (or more like same width) through all breakpoints and sizes - they're not responsive.

*Static grid example*
<div class="classic--static">
  <ul class="agrid-6">
    <li>1st</li>
    <li>2nd</li>
    <li>3rd</li>
    <li>4th</li>
    <li>5ft</li>
    <li>6th</li>
  </ul>
</div>

```html
<ul class="agrid-6">
  <li>1st</li>
  <li>2nd</li>
  <li>3rd</li>
  <li>4th</li>
  <li>5ft</li>
  <li>6th</li>
</ul>
```

### Responsive grid
Following the "mobile-first" approach, the Responsive Columns will set their value only when the viewport equals or is greater than the breakpoint value. <br/>
These breakpoints are set as a "prefix" to the normal `agrid-[n]` class you have already seen above, like this: `sm:agrid-4` , `md:agrid-6` , `lg:agrid-8` . If our viewport is smaller than the define breakpoint-prefix the item will have a full width, it will span over all 12 columns. Of cource if you have defined 2 breakpoints, the larger/bigger one takes charge only during its own breakpoint width.

Example - `md:agrid-6` - responsive grid that creates 6 columns when the viewport is bigger or equal to the `md` breakpoint (>= 768px).

*Responsive grid example*
<div class="classic--responsive">
  <ul class="agrid-1 sm:agrid-2 md:agrid-3 lg:agrid-4">
    <li>1st</li>
    <li>2nd</li>
    <li>3rd</li>
    <li>4th</li>
    <li>5ft</li>
    <li>6th</li>
  </ul>
</div>

```html{1}
<ul class="agrid-1 sm:agrid-2 md:agrid-3 lg:agrid-4">
  <li>1st</li>
  <li>2nd</li>
  <li>3rd</li>
  <li>4th</li>
  <li>5ft</li>
  <li>6th</li>
</ul>
```

### Classic with `acol-[n]`
You can also use the `acol-[n]` classes here too, but they're not required. They will help you span a specific item on more columns. Works for both static and responsive cases.

*Classic grid + acol-2 example*
<div class="classic--responsive">
  <ul class="agrid-1 sm:agrid-2 md:agrid-3 lg:agrid-4">
    <li class="sm:acol-2">1st</li>
    <li>2nd</li>
    <li>3rd</li>
    <li>4th</li>
    <li>5ft</li>
    <li>6th</li>
  </ul>
</div>

```html{2}
<ul class="agrid-1 sm:agrid-2 md:agrid-3 lg:agrid-4">
  <li class="acol-2">1st</li>
  <li>2nd</li>
  <li>3rd</li>
  <li>4th</li>
  <li>5ft</li>
  <li>6th</li>
</ul>
```




## 12 Column style

aGrid uses the classic "12-Column-Grid" style, which means that we're dividing a container's available width by 12 columns and then we specifically set to each child element how much "columns" of this space we want it to span. <br/>
When you set `agrid` as a class on a container, its children can use the `acol-` classes to control their width, based on how many columns we want them to span over.`acol-` is available only under agrid! The `acol-` class can define sizes between 1 and 12 - `acol-1`, `acol-2`, `acol-3`, ... , `acol-12`.

```html
<ul class="agrid">
  <li class="acol-12">Spans over 12 columns (full width)</li>

  <li class="acol-6">Spans over 6 columns</li>
  <li class="acol-6">Spans over 6 columns</li>
</ul>
```

::: tip
The number of columns and respectively the available `acol-[n]` classes can be customized fully via SASS. More on this you can find here: [Customizing aGrid](../config/customizing.md).
:::

### Static columns

Static columns stay the same size (or more like same width) through all breakpoints and sizes - they're not responsive. The `acol-` class can define sizes between 1 and 12 - `acol-1`, `acol-2`, `acol-3`, ... , `acol-12`.

```html
<ul class="agrid">
  <li class="acol-12">.acol-12</li>

  <li class="acol-6">.acol-6</li>
  <li class="acol-6">.acol-6</li>

  <li class="acol-5">.acol-5</span></li>
  <li class="acol-2">2</li>
  <li class="acol-5">.acol-5</li>

  ...
</ul>
```

_Static columns example_

<div class="basic">
<ul class="agrid">
        <li class="acol-12"><span>.acol-12</span></li>
        <li class="acol-6"><span>.acol-6</span></li>
        <li class="acol-6"><span>.acol-6</span></li>
        <li class="acol-5"><span>.acol-5</span></li>
        <li class="acol-2"><span>2</span></li>
        <li class="acol-5"><span>.acol-5</span></li>
        <li class="acol-4"><span>.acol-4</span></li>
        <li class="acol-4"><span>.acol-4</span></li>
        <li class="acol-4"><span>.acol-4</span></li>
        <li class="acol-3"><span>.acol-3</span></li>
        <li class="acol-3"><span>.acol-3</span></li>
        <li class="acol-3"><span>.acol-3</span></li>
        <li class="acol-3"><span>.acol-3</span></li>
        <li class="acol-2"><span>2</span></li>
        <li class="acol-2"><span>2</span></li>
        <li class="acol-2"><span>2</span></li>
        <li class="acol-2"><span>2</span></li>
        <li class="acol-2"><span>2</span></li>
        <li class="acol-2"><span>2</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
        <li class="acol-1"><span>1</span></li>
      </ul>
      </div>

::: details Click me to view the code

```html
<ul class="agrid">
  <li class="acol-12"><span>.acol-12</span></li>

  <li class="acol-6"><span>.acol-6</span></li>
  <li class="acol-6"><span>.acol-6</span></li>

  <li class="acol-5"><span>.acol-5</span></li>
  <li class="acol-2"><span>2</span></li>
  <li class="acol-5"><span>.acol-5</span></li>

  <li class="acol-4"><span>.acol-4</span></li>
  <li class="acol-4"><span>.acol-4</span></li>
  <li class="acol-4"><span>.acol-4</span></li>

  <li class="acol-3"><span>.acol-3</span></li>
  <li class="acol-3"><span>.acol-3</span></li>
  <li class="acol-3"><span>.acol-3</span></li>
  <li class="acol-3"><span>.acol-3</span></li>

  <li class="acol-2"><span>2</span></li>
  <li class="acol-2"><span>2</span></li>
  <li class="acol-2"><span>2</span></li>
  <li class="acol-2"><span>2</span></li>
  <li class="acol-2"><span>2</span></li>
  <li class="acol-2"><span>2</span></li>

  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
  <li class="acol-1"><span>1</span></li>
</ul>
```

:::

### Responsive columns

Following the "mobile-first" approach, the Responsive Columns will set their value only when the viewport equals or is greater than the breakpoint value. <br/>
These breakpoints are set as a "prefix" to the normal `acol-` class you have already seen above, like this: `sm:acol-4` , `md:acol-6` , `md:acol-8` . If our viewport is smaller than the define breakpoint-prefix the item will have a full width, it will span over all 12 columns. Of cource if you have defined 2 breakpoints, the larger/bigger one takes charge only during its own breakpoint width.

Example - `md:acol-6` - responsive column that spans 6 columns-width when the viewport is bigger or equal to the `md` breakpoint (>= 768px).

_Responsive columns example_ - Resize your viewport

<div class="responsive">
    <ul class="agrid">
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">1st</li>
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">2nd</li>
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">3rd</li>
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">4th</li>
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">5ft</li>
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">6th</li>
    </ul>
</div>

On mobile each element will be full width (12 cols), at 640px (`sm`) will be 2 columns wide, at 768px (`md`) will be 3 columns wide and at 1024px+ (`lg`) will be 4 columns wide.

```html
<ul class="agrid">
  <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">1st</li>
  <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">2nd</li>
  <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">3rd</li>
  <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">4th</li>
  <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">5ft</li>
  <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">6th</li>
</ul>
```

## Breakpoints and gaps
`agrid` has a default support for responsive gap sizes. Here is the source code to look at the workflow. Customizing the `$agrid-breakpoints` or `$agrid-gaps` can change this default behaviour, so keep this in mind when configurating.

```scss
// $agrid-breakpoints, "sm" - 640px;
// $agrid-gaps, 3 - 0.75rem;
@if map.has-key($agrid-breakpoints, "sm") {
  @media (min-width: map.get($agrid-breakpoints, "sm")) {
    :where([class*="agrid"]) {
      --agrid-gap: #{map.get($agrid-gaps, 3)};
    }
  }
}

// $agrid-breakpoints, "md" - 768px;
// $agrid-gaps, 3 - 1rem;
@if map.has-key($agrid-breakpoints, "md") {
  @media (min-width: map.get($agrid-breakpoints, "md")) {
    :where([class*="agrid"]) {
      --agrid-gap: #{map.get($agrid-gaps, 4)};
    }
  }
}

// $agrid-breakpoints, "lg" - 1024px;
// $agrid-gaps, 5 - 1.25rem;
@if map.has-key($agrid-breakpoints, "lg") {
  @media (min-width: map.get($agrid-breakpoints, "lg")) {
    :where([class*="agrid"]) {
      --agrid-gap: #{map.get($agrid-gaps, 5)};
    }
  }
}

// $agrid-breakpoints, "xxxl" - 1536px;
// $agrid-gaps, 6 - 1.5rem;
@if map.has-key($agrid-breakpoints, "xxxl") {
  @media (min-width: map.get($agrid-breakpoints, "xxxl")) {
    :where([class*="agrid"]) {
      --agrid-gap: #{map.get($agrid-gaps, 6)};
    }
  }
}
```




<style>
  /* Classic */
  .classic--static{
    --teal-5: #20c997;
  }
  .classic--static [class*="agrid"] > li {
  background-color: var(--teal-5);
}

/* Classic responsive */
.classic--responsive{
   --green-2: #b2f2bb;
--green-3: #8ce99a;
--green-4: #69db7c;
--green-5: #51cf66;
  }
  .classic--responsive [class*="agrid"] > li {
  background-color: var(--green-2);
}
@media screen and (min-width: 640px) {
  .classic--responsive [class*="agrid"] > li {
    background-color: var(--green-3);
  }
}
@media screen and (min-width: 768px) {
  .classic--responsive [class*="agrid"] > li {
    background-color: var(--green-4);
  }
}
@media screen and (min-width: 1024px) {
  .classic--responsive [class*="agrid"] > li {
    background-color: var(--green-5);
  }
}
/* 12 columns */
.basic{
  --orange-3: #ffc078;
  --orange-4: #ffa94d;
  --orange-5: #ff922b;
  --orange-6: #fd7e14;
  --orange-7: #f76707;
  --orange-8: #e8590c;
  --orange-9: #d9480f;
}
.basic .agrid .acol-1 {
  background-color: var(--orange-9);
}
.basic .agrid .acol-2 {
  background-color: var(--orange-8);
}
.basic .agrid .acol-3 {
  background-color: var(--orange-7);
}
.basic .agrid .acol-4 {
  background-color: var(--orange-6);
}
.basic .agrid .acol-5 {
  background-color: var(--orange-5);
}
.basic .agrid .acol-6 {
  background-color: var(--orange-4);
}
.basic .agrid .acol-12 {
  background-color: var(--orange-3);
}
/* Responsive */
.responsive{
    --lime-3: #c0eb75;
    --lime-4: #a9e34b;
    --lime-5: #94d82d;
    --lime-6: #82c91e;
    --lime-7: #74b816;
}
.responsive .agrid li {
  background-color: var(--lime-3);
}
@media screen and (min-width: 640px) {
  .responsive .agrid li {
    background-color: var(--lime-4);
  }
}
@media screen and (min-width: 768px) {
  .responsive .agrid li {
    background-color: var(--lime-5);
  }
}
@media screen and (min-width: 1024px) {
  .responsive .agrid li {
    background-color: var(--lime-6);
  }
}
@media screen and (min-width: 1280px) {
  .responsive .agrid li {
    background-color: var(--lime-7);
  }
}
</style>
