import isFinite from './isFinite.js';

const isInt32 = (x) => isFinite(x) && x === (x | 0);
export default isInt32;
