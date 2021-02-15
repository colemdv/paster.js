# Paster.js

<p align="center">
  <a href="https://npmjs.com/paster.js"><img src="https://img.shields.io/npm/v/paster.js.svg" alt="NPM Package Version"></a>
  <a href="https://npmjs.com/paster.js"><img src="https://img.shields.io/github/languages/code-size/colecci/paster.js.svg" alt="Size"></a>
</p>

The official JS wrapper for <a href="https://paste.colem.dev?ref=github">paste.colem.dev</a>




## Installation

Install with NPM

`npm install paster.js`

Install with Yarn

`yarn install paster.js`

---

## Examples

**Create a paste**

```js
const paster = require("paster.js");
const paste = await paster.create("paste content")
console.log(paste)
```

**Fetch a paste**

```js
const paste = await paster.fetch('paste_id')
console.log(paste)
```