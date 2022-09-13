# Order

::: tip
If you're using another utility framework (like Tailwind or WindiCSS) that supports the `order` property you can skip this module and use the base `agrid` module.
:::

In CSS Grid you have access to a order property, with a default value of 0. To move around specific elements we can use the acol-order- class to change the order value. acol-order- supports both static and responsive syntax. Examples:

`order-first` sends the element to the start of the grid with order: -1
`order-last` sends the element to the end of the grid with order: 12
`order-[1-11]` (max. 11) sets order: [1-11]

_Order responsive example - 12 column style_

<ul class="order agrid">
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">1st</li>
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6 xl:order-3">
        2nd
    </li>
    <li class="sm:acol-2 md:acol-3 xl:order-2">3rd</li>
    <li class="sm:acol-2 md:acol-3 xl:order-1">4th</li>
    <li class="sm:acol-2 md:acol-3 xl:order-3">5ft</li>
</ul>

```html
<ul class="agrid">
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6">1st</li>
    <li class="sm:acol-2 md:acol-3 lg:acol-4 xl:acol-6 xl:order-3">
        2nd
    </li>
    <li class="sm:acol-2 md:acol-3 xl:order-2">3rd</li>
    <li class="sm:acol-2 md:acol-3 xl:order-1">4th</li>
    <li class="sm:acol-2 md:acol-3 xl:order-3">5ft</li>
</ul>
```

## Utility classes
You can set the breakpoints as prefixes to each class - `sm:`, `md:`, etc.

```css
.order-first {
  --agrid-order: -1;
}

.order-last {
  --agrid-order: 12;
}

.order-1 {
  --agrid-order: 1;
}

.order-2 {
  --agrid-order: 2;
}

.order-3 {
  --agrid-order: 3;
}

.order-4 {
  --agrid-order: 4;
}

.order-5 {
  --agrid-order: 5;
}

.order-6 {
  --agrid-order: 6;
}

.order-7 {
  --agrid-order: 7;
}

.order-8 {
  --agrid-order: 8;
}

.order-9 {
  --agrid-order: 9;
}

.order-10 {
  --agrid-order: 10;
}

.order-11 {
  --agrid-order: 11;
}
```

<style scoped>
/* ------------------ */
/* Order */
.order{
    --red-1: #ffe3e3;
    --red-2: #ffc9c9;
    --red-3: #ffa8a8;
    --red-4: #ff8787;
    --red-5: #ff6b6b;
    --red-6: #fa5252;
    --red-7: #f03e3e;
    --red-8: #e03131;
    --red-9: #c92a2a; 
}
.order.agrid li:nth-child(1) {
  background-color: var(--red-9);
}
.order.agrid li:nth-child(2) {
  background-color: var(--red-7);
}
.order.agrid li:nth-child(3) {
  background-color: var(--red-5);
}
.order.agrid li:nth-child(4) {
  background-color: var(--red-3);
}
.order.agrid li:nth-child(5) {
  background-color: var(--red-2);
}
</style>