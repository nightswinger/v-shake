# v-shake

Simple shake animation directive for Vue 3.0

## Demo

You can view the demo of the project here:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/vue-xucuer)

## Install

```bash
npm install v-shake
```

## Usage

Register global instance.

```js
import VShake from "v-shake";

app.use(VShake);
```

Add `v-shake` directive to element you want to shake.

```html
<span v-shake>I am a cat</span>
<span v-shake="{ trigger: 'click' }">As yet I have no name.</span>
<span v-shake="{ trigger: 'click', type: 'vertical' }">
  I've no idea where I was born.
</span>
```
