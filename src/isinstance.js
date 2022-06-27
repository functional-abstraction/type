

var isinstance = function ( type, obj ) {

	return obj !== null &&
	       obj !== undefined &&
	       obj.constructor.prototype === type.prototype;

};

exports.isinstance = isinstance;
