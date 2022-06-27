import isInstance from './isInstance.js';

const isFunction = (value) => isInstance(Function, value);
export default isFunction;
