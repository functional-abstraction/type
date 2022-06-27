import test from 'ava';
import {isFinite} from '../../src/index.js';
import {isArray, isObject} from '../../src/index.js';

const macro = ( t, n, v ) => {
	t.deepEqual( isFinite( n ), v );
};

macro.title = (title, n, v) => title ?? `isFinite(${isArray(n) || isObject(n) || typeof n === "string" ? JSON.stringify(n) : n}) === ${v}`;

test(macro,  0, true );
test(macro,  NaN, false );
test(macro,  Infinity, false );
test(macro,  -Infinity, false );

test(macro, 1, true );
test(macro, 2, true );
test(macro, 0.000001, true );
test(macro, 1.2121289e127, true );
test(macro, Math.pow(2, 31) - 1, true );
test(macro, Math.pow(2, 31), true );
test(macro, Math.pow(2, 32), true );
test(macro, Math.pow(2, 32) - 1, true );
test(macro, Math.pow(2, 53) - 1, true );
test(macro, Math.PI, true );
test(macro, Math.E, true );

test(macro, -1, true );
test(macro, -2, true );
test(macro, -0.000001, true );
test(macro, -1.2121289e127, true );
test(macro, -(Math.pow(2, 31) - 1), true );
test(macro, -Math.pow(2, 31), true );
test(macro, -Math.pow(2, 32), true );
test(macro, -(Math.pow(2, 32) - 1), true );
test(macro, -(Math.pow(2, 53) - 1), true );
test(macro, -Math.PI, true );
test(macro, -Math.E, true );


test(macro,  [], false );
test(macro,  [0], false );
test(macro,  [1], false );

test(macro,  true, false );
test(macro,  false, false );

test(macro,  new Date(), false );

test(macro,  Number, false );
test(macro,  Array, false );
test(macro,  Boolean, false );
test(macro,  Date, false );
test(macro,  Function, false );
test(macro,  Object, false );
test(macro,  RegExp, false );
test(macro,  String, false );
test(macro,  function () {}, false );
test(macro,  () => {}, false );

test(macro,  {}, false );
test(macro,  { 0 : 0 }, false );
test(macro,  { 1 : 1 }, false );

test(macro,  /a/, false );

test(macro,  "", false );
test(macro,  "0", false );
test(macro,  "1", false );
test(macro,  "-1", false );
test(macro,  "NaN", false );
test(macro,  "Infinity", false );
test(macro,  "-Infinity", false );
test(macro,  "+Infinity", false );

test(macro,  null, false );

test(macro,  undefined, false );
