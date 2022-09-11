# Grid

aGrid supports 2 syntaxes - a "quick" style were you directly define the number of columns (something like [Tailwind's grid](https://tailwindcss.com/docs/grid-template-columns)) and "12 Column" style, where you define a container splited by 12 columns and set each child element how much columns it spans inside (something like [Bootstrap's grid system](https://getbootstrap.com/docs/4.0/layout/grid/)).

[[toc]]

## Quick style

uses the classic "12-Column-Grid" Style, which means that we're dividing our available width to 12 and then we specifically set how much columns or parts of this space we want to use.
When you set agrid as a class on a container, its children can use the acol- classes to control their width, based on how many columns we want them to span over.acol- is available only under agrid!

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

*Static columns example*
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

Example - `md:acol-6` - responsive column that takes 6 columns after `md` breakpoint (768px). 

*Responsive columns example* - Resize your viewport

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



<style>
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
@media screen and (min-width: 576px) {
  .responsive .agrid li {
    background-color: var(--lime-4);
  }
}
@media screen and (min-width: 768px) {
  .responsive .agrid li {
    background-color: var(--lime-5);
  }
}
@media screen and (min-width: 992px) {
  .responsive .agrid li {
    background-color: var(--lime-6);
  }
}
@media screen and (min-width: 1200px) {
  .responsive .agrid li {
    background-color: var(--lime-7);
  }
}
</style>
