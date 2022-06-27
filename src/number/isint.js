

var isint = function ( value ) {

	return isfinite( value ) && (value % 1 === 0);

};

exports.isint = isint;
