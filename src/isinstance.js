

export function isinstance ( type, obj ) {

	return obj !== null &&
	       obj !== undefined &&
	       obj.constructor.prototype === type.prototype;

}

