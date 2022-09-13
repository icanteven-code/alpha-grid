# Offset

There are ocasionally situations where you would want to "move" an element slightly to the right, a.k.a. leaving some space on the left (the start of the row) or offseting the element. When you offset an element, everything after that element moves with it.

When you use the offset class `offset-` for your columns, you define an empty space ("offset") on the left side of your column. This offset space is again calculated by the space of a column. `offset-2` means that you will have an empty space equal to the width of 2 columns left of your targeted element.
Offsets support both static and responsive workflow - acol-offset-2 OR md:acol-offset-2.

Offset supports both static and responsive uses.

::: warning
⚠️ While all other classes support values from 1 to 12, offset supports from 1 to 11! Setting an offset of 12 will mean to push your element to a new line, which you can easily do with a new agrid container.
:::

*Responsive offset example - 12 columns*
<ul class="agrid offset">
    <li class="sm:acol-2 md:acol-6">1st</li>
    <li class="sm:acol-2 md:acol-6">2nd</li>
    <li class="sm:acol-2 sm:offset-2 md:acol-3 md:offset-3">OFFSET</li>
    <li class="sm:acol-2 md:acol-3">4th</li>
    <li class="sm:acol-2 md:acol-3">5ft</li>
</ul>

```html{4}
<ul class="agrid">
    <li class="sm:acol-2 md:acol-6">1st</li>
    <li class="sm:acol-2 md:acol-6">2nd</li>
    <li class="sm:acol-2 sm:offset-2 md:acol-3 md:offset-3">OFFSET</li>
    <li class="sm:acol-2 md:acol-3">4th</li>
    <li class="sm:acol-2 md:acol-3">5ft</li>
</ul>
```
<br/>

*Responsive offset example - Classic style*
<ul class="offset--static agrid-1 sm:agrid-2 md:agrid-4">
    <li class="md:acol-2">1st</li>
    <li class="md:acol-2">2nd</li>
    <li class="sm:offset-1 md:offset-2">OFFSET</li>
    <li>4th</li>
    <li>5ft</li>
</ul>

```html{1,4}
<ul class="agrid-1 sm:agrid-2 md:agrid-4">
    <li class="md:acol-2">1st</li>
    <li class="md:acol-2">2nd</li>
    <li class="sm:offset-1 md:offset-2">OFFSET</li>
    <li>4th</li>
    <li>5ft</li>
</ul>
```

## Utility classes
You can set the breakpoints as prefixes to each class - `sm:`, `md:`, etc.

```css
.offset-1 {
  --agrid-column-start: 2;
}

.offset-2 {
  --agrid-column-start: 3;
}

.offset-3 {
  --agrid-column-start: 4;
}

.offset-4 {
  --agrid-column-start: 5;
}

.offset-5 {
  --agrid-column-start: 6;
}

.offset-6 {
  --agrid-column-start: 7;
}

.offset-7 {
  --agrid-column-start: 8;
}

.offset-8 {
  --agrid-column-start: 9;
}

.offset-9 {
  --agrid-column-start: 10;
}

.offset-10 {
  --agrid-column-start: 11;
}

.offset-11 {
  --agrid-column-start: 12;
}
```



<style scoped>
.offset{
  --blue-3: #74c0fc;
  --blue-7: #1c7ed6;
}
.offset.agrid li {
  background-color: var(--blue-3);
}

.offset.agrid li[class*="offset"] {
  background-color: var(--blue-7);
}

.offset--static{
  --violet-3: #b197fc;
  --violet-7: #7048e8;
}
.offset--static li {
  background-color: var(--violet-3);
}

.offset--static li[class*="offset"] {
  background-color: var(--violet-7);
}
</style>