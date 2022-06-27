[@functional-abstraction/type](https://functional-abstraction.github.io/type)
==

Type helpers for JavaScript.

```js
import {isFunction} from '@functional-abstraction/type';
isFunction(() => {}); // true
```

[![License](https://img.shields.io/github/license/functional-abstraction/type.svg)](https://raw.githubusercontent.com/functional-abstraction/type/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@functional-abstraction/type.svg)](https://www.npmjs.org/package/@functional-abstraction/type)
[![Tests](https://img.shields.io/github/workflow/status/functional-abstraction/type/ci:cover?event=push&label=tests)](https://github.com/functional-abstraction/type/actions/workflows/ci:cover.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/functional-abstraction/type.svg)](https://github.com/functional-abstraction/type/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/functional-abstraction/type.svg)](https://github.com/functional-abstraction/type/issues)
[![Downloads](https://img.shields.io/npm/dm/@functional-abstraction/type.svg)](https://www.npmjs.org/package/@functional-abstraction/type)

[![Code issues](https://img.shields.io/codeclimate/issues/functional-abstraction/type.svg)](https://codeclimate.com/github/functional-abstraction/type/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/functional-abstraction/type.svg)](https://codeclimate.com/github/functional-abstraction/type/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/functional-abstraction/type/main.svg)](https://codecov.io/gh/functional-abstraction/type)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/functional-abstraction/type.svg)](https://codeclimate.com/github/functional-abstraction/type/trends/technical_debt)
[![Documentation](https://functional-abstraction.github.io/type/badge.svg)](https://functional-abstraction.github.io/type/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@functional-abstraction/type)](https://bundlephobia.com/result?p=@functional-abstraction/type)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:functional-abstraction/type
# or
jspm install npm:@functional-abstraction/type
```
### duo
No install step needed for duo!

### component
```terminal
component install functional-abstraction/type
```

### bower
```terminal
bower install @functional-abstraction/type
```

### ender
```terminal
ender add @functional-abstraction/type
```

### jam
```terminal
jam install @functional-abstraction/type
```

### spm
```terminal
spm install @functional-abstraction/type --save
```

### npm
```terminal
npm install @functional-abstraction/type --save
```

## Require
### jspm
```js
let type = require( "github:functional-abstraction/type" ) ;
// or
import type from '@functional-abstraction/type' ;
```
### duo
```js
let type = require( "functional-abstraction/type" ) ;
```

### component, ender, spm, npm
```js
let type = require( "@functional-abstraction/type" ) ;
```

### bower
The script tag exposes the global variable `type`.
```html
<script src="bower_components/@functional-abstraction/type/js/dist/type.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@functional-abstraction/type" ] , function ( type ) { ... } ) ;
```
