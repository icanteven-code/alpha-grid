# Gap

::: tip
If you're using another utility framework (like Tailwind or WindiCSS) that supports the `gap` property you can skip this module and use the base `agrid` module.
:::

aGrid has default gap sizes already defined, which you can customize pretty simply either via SASS or just writing some custom css after you import the library. In other cases you may need a way to often move around different gap sizes, that's why you can additionally use the `gap-[n]` class to set specific gap sizes.

Supports both static and responsive syntaxes.

See the difference for yourself:

*Normal grid example*
<ul class="example normal agrid-2">
    <li class="acol-2">1st</li>
    <li>2nd</li>
    <li>3rd</li>
    <li>4th</li>
    <li>5ft</li>
</ul>

*Gap example*

<ul class="example custom agrid-2 md:gap-12 lg:gap-11 xl:gap-10">
    <li class="acol-2">1st</li>
    <li>2nd</li>
    <li>3rd</li>
    <li>4th</li>
    <li>5ft</li>
</ul>

```html{1}
<ul class="agrid-2 md:gap-12 lg:gap-11 xl:gap-10">
    <li class="acol-2">1st</li>
    <li>2nd</li>
    <li>3rd</li>
    <li>4th</li>
    <li>5ft</li>
</ul>
```

## Utility classes
You can set the breakpoints as prefixes to each class - `sm:`, `md:`, etc.

Each step is equal to `0.25rem` : `gap-1` = `0.25rem`, `gap-2` = `0.5rem`, `gap-3` = `0.75rem`, etc.

```css
.gap-1 {
  --agrid-gap: 0.25rem;
}

.gap-2 {
  --agrid-gap: 0.5rem;
}

.gap-3 {
  --agrid-gap: 0.75rem;
}

.gap-4 {
  --agrid-gap: 1rem;
}

.gap-5 {
  --agrid-gap: 1.25rem;
}

.gap-6 {
  --agrid-gap: 1.5rem;
}

.gap-7 {
  --agrid-gap: 1.75rem;
}

.gap-8 {
  --agrid-gap: 2rem;
}

.gap-9 {
  --agrid-gap: 2.25rem;
}

.gap-10 {
  --agrid-gap: 2.5rem;
}

.gap-11 {
  --agrid-gap: 2.75rem;
}

.gap-12 {
  --agrid-gap: 3rem;
}
```


<style scoped>
/* ------------------ */
/* Order */
.example{
    --grape-3: #e599f7;
    --grape-7: #ae3ec9;
}
.normal li{
    background-color:var(--grape-3)
}
.custom li{
    background-color:var(--grape-7)
}
</style>