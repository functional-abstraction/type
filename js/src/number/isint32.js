


var isint32 = function ( value ) {

	return isfinite( value ) && value === (value | 0);

};

exports.isint32 = isint32;
