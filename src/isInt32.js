import isFinite from './isFinite';

const isInt32 = (x) => isFinite(x) && x === (x | 0);
export default isInt32;
