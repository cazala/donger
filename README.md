Donger ヽ༼ຈل͜ຈ༽ﾉ
===============

Generates dongers from [dongerlist.com](http://dongerlist.com).

## Usage

```js
var donger = require('donger');

// 1. Get a random donger
donger() // ヽ༼ •́ ヮ •̀ ༽ᓄ

// 2. Get a random donger by category
donger('dunno') // 乁| ･ 〰 ･ |ㄏ

// 3. Get a specific donger
donger('dunno', 5) // 乁( ⁰͡  Ĺ̯ ⁰͡ ) ㄏ

// 4. Get list of categories
donger.categories // [ 'ameno', 'angry', 'animal', 'brick', 'cool', ...]

// 5. Get everything
donger.dongers // { ameno: [...], angry: [...], animal: [...], ... }
```

## CLI

You can also use the CLI

- Use `donger` to get a random donger
- Use `donger <category>` to get a random donger by category
- Use `donger -c` or `donger --categories` to get available categories
- Use `donger -h` or `donger --help` to show this dialog

---

**I have nothing to do with `dongerlist.com`. All the dongers are theirs, not mine.**
