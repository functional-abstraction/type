[js-type](http://aureooms.github.io/js-type)
==

Type checking code bricks for JavaScript.

```js
type.isfunction( function ( ) { } ) ; // true
```

[![NPM license](http://img.shields.io/npm/l/@aureooms/js-type.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-type/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/@aureooms/js-type.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-type)
[![Bower version](http://img.shields.io/bower/v/@aureooms/js-type.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-type)
[![Build Status](http://img.shields.io/travis/aureooms/js-type.svg?style=flat)](https://travis-ci.org/aureooms/js-type)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-type.svg?style=flat)](https://coveralls.io/r/aureooms/js-type)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-type.svg?style=flat)](https://david-dm.org/aureooms/js-type#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-type.svg?style=flat)](https://david-dm.org/aureooms/js-type#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-type.svg?style=flat)](https://codeclimate.com/github/aureooms/js-type)
[![NPM downloads per month](http://img.shields.io/npm/dm/@aureooms/js-type.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-type)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-type.svg?style=flat)](https://github.com/aureooms/js-type/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-type.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-type)

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
