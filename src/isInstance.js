const isInstance = ( type, x ) => {
	return x !== null &&
	       x !== undefined &&
	       x.constructor.prototype === type.prototype;
};

export default isInstance;
