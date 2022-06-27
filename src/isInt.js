import isFinite from './isFinite.js';

const isInt = (x) => isFinite(x) && (x % 1 === 0);
export default isInt;
