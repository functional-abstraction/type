import isInstance from './isInstance';

const isFunction = ( value ) => isInstance( Function, value );
export default isFunction;
