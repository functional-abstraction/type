[@aureooms/js-type](https://make-github-pseudonymous-again.github.io/js-type)
==

Type checking code bricks for JavaScript.

```js
type.isfunction( function ( ) { } ) ; // true
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-type.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-type/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-type.svg)](https://www.npmjs.org/package/@aureooms/js-type)
[![Tests](https://img.shields.io/github/workflow/status/make-github-pseudonymous-again/js-type/ci:cover?event=push&label=tests)](https://github.com/make-github-pseudonymous-again/js-type/actions/workflows/ci:cover.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/make-github-pseudonymous-again/js-type.svg)](https://github.com/make-github-pseudonymous-again/js-type/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-type.svg)](https://github.com/make-github-pseudonymous-again/js-type/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-type.svg)](https://www.npmjs.org/package/@aureooms/js-type)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-type.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-type/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-type.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-type/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-type/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-type)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-type.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-type/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-type//badge.svg)](https://make-github-pseudonymous-again.github.io/js-type//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-type)](https://bundlephobia.com/result?p=@aureooms/js-type)

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
jspm install github:aureooms/js-type
# or
jspm install npm:@aureooms/js-type
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-type
```

### bower
```terminal
bower install @aureooms/js-type
```

### ender
```terminal
ender add @aureooms/js-type
```

### jam
```terminal
jam install @aureooms/js-type
```

### spm
```terminal
spm install @aureooms/js-type --save
```

### npm
```terminal
npm install @aureooms/js-type --save
```

## Require
### jspm
```js
let type = require( "github:aureooms/js-type" ) ;
// or
import type from '@aureooms/js-type' ;
```
### duo
```js
let type = require( "aureooms/js-type" ) ;
```

### component, ender, spm, npm
```js
let type = require( "@aureooms/js-type" ) ;
```

### bower
The script tag exposes the global variable `type`.
```html
<script src="bower_components/@aureooms/js-type/js/dist/type.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-type" ] , function ( type ) { ... } ) ;
```

## Use

### Generic methods

#### `type.isinstance( object )`
#### `type.isnull( object )`
#### `type.isundefined( object )`

### Methods for numbers

#### `type.isfinite( object )`
#### `type.isint32( object )`
#### `type.isint( object )`
#### `type.isnan( object )`
#### `type.isnegativeinfinity( object )`
#### `type.isnumber( object )`
#### `type.ispositiveinfinity( object )`

### Methods for objects

#### `type.isarray( object )`
#### `type.isboolean( object )`
#### `type.isdate( object )`
#### `type.isfunction( object )`
#### `type.isobject( object )`
#### `type.isregexp( object )`
#### `type.isstring( object )`
