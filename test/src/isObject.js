import test from 'ava';
import {isArray, isObject} from '../../src/index.js';

const macro = (t, n, v) => {
	t.deepEqual(isObject(n), v);
};

macro.title = (title, n, v) =>
	title ??
	`isObject(${
		isArray(n) || isObject(n) || typeof n === 'string' ? JSON.stringify(n) : n
	}) === ${v}`;

test(macro, 0, false);
test(macro, Number.NaN, false);
test(macro, Number.POSITIVE_INFINITY, false);
test(macro, Number.NEGATIVE_INFINITY, false);

test(macro, 1, false);
test(macro, 2, false);
test(macro, 0.000_001, false);
test(macro, 1.212_128_9e127, false);
test(macro, 2 ** 31 - 1, false);
test(macro, 2 ** 31, false);
test(macro, 2 ** 32, false);
test(macro, 2 ** 32 - 1, false);
test(macro, 2 ** 53 - 1, false);
test(macro, Math.PI, false);
test(macro, Math.E, false);

test(macro, -1, false);
test(macro, -2, false);
test(macro, -0.000_001, false);
test(macro, -1.212_128_9e127, false);
test(macro, -(2 ** 31 - 1), false);
test(macro, -(2 ** 31), false);
test(macro, -(2 ** 32), false);
test(macro, -(2 ** 32 - 1), false);
test(macro, -(2 ** 53 - 1), false);
test(macro, -Math.PI, false);
test(macro, -Math.E, false);

test(macro, [], false);
test(macro, [0], false);
test(macro, [1], false);

test(macro, true, false);
test(macro, false, false);

test(macro, new Date(), false);

test(macro, Number, false);
test(macro, Array, false);
test(macro, Boolean, false);
test(macro, Date, false);
test(macro, Function, false);
test(macro, Object, false);
test(macro, RegExp, false);
test(macro, String, false);
test(macro, function () {}, false);
test(macro, () => {}, false);

test(macro, {}, true);
test(macro, {0: 0}, true);
test(macro, {1: 1}, true);

test(macro, /a/, false);

test(macro, '', false);
test(macro, '0', false);
test(macro, '1', false);
test(macro, '-1', false);
test(macro, 'NaN', false);
test(macro, 'Infinity', false);
test(macro, '-Infinity', false);
test(macro, '+Infinity', false);

test(macro, null, false);

test(macro, undefined, false);
