---
layout: home
aside: true
hero:
  name: 🧱 αGrid
  text: Simple. Small. Configurable.
  tagline: Simple utility-first CSS library for implemeting Grid layouts
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-agrid
    - theme: alt
      text: View on GitHub
      link: https://github.com/icanteven-code/alpha-grid


features:
  - icon: 🍱
    title: CSS Grid
    details: Using **only** CSS Grid. No floats. No flexbox.
  - icon: 👷
    title: Simple
    details: Clean and straight-forward class names and usage.
  - icon: ⚡
    title: Small
    details: Full CSS build is ~ 9.43kB / XXX gzip
  - icon: 🛠️
    title: Configurable
    details: You can change everything - column numbers, gaps, breakpoints, etc.
---


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


<style scoped>
.basic{
  --orange-3: #ffc078;
  --orange-4: #ffa94d;
  --orange-5: #ff922b;
  --orange-6: #fd7e14;
  --orange-7: #f76707;
  --orange-8: #e8590c;
  --orange-9: #d9480f;

  width: 90%;
  max-width:1152px;
  margin: 6rem auto 0 auto;
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
</style>
