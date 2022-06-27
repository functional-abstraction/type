import isFinite from './isFinite.js';

// eslint-disable-next-line no-bitwise
const isInt32 = (x) => isFinite(x) && x === (x | 0);
export default isInt32;
