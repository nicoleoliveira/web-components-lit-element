---
layout: page.11ty.cjs
title: <wcl-button> ⌲ Home
---

# &lt;wcl-button>

`<wcl-button>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<wcl-button>` is just an HTML element. You can it anywhere you can use HTML!

```html
<wcl-button></wcl-button>
```

  </div>
  <div>

<wcl-button></wcl-button>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<wcl-button>` can be configured with attributed in plain HTML.

```html
<wcl-button name="HTML"></wcl-button>
```

  </div>
  <div>

<wcl-button name="HTML"></wcl-button>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<wcl-button>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;wcl-button&gt;</h2>
  <wcl-button .name=${name}></wcl-button>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;wcl-button&gt;</h2>
<wcl-button name="lit-html"></wcl-button>

  </div>
</section>
