# The `trimStart` method for IE11

[![Build Status](https://travis-ci.com/ungap/trim-start.svg?branch=master)](https://travis-ci.com/ungap/trim-start) [![Coverage Status](https://coveralls.io/repos/github/ungap/trim-start/badge.svg?branch=master)](https://coveralls.io/github/ungap/trim-start?branch=master)

Fixes the <sub><sup>(in)</sup></sub>famous `\u2028` and `\u2029` behavior that produces unparsable JS, and it also fixes [not well formed strings](https://github.com/tc39/proposal-well-formed-stringify).

  * CDN via https://unpkg.com/@ungap/trim-start
  * ESM via `import trimStart from '@ungap/trim-start'`
  * CJS via `const trimStart = require('@ungap/trim-start')`

```js
import trimStart from '@ungap/trim-start';

trimStart.call('  test '); // "test "
```

Compatible with every engine that has already trim-start.

[Live test](https://ungap.github.io/trim-start/test/)
