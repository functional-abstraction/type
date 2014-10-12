

var isnan = function ( value ) {
	return isnumber( value ) && isNaN( value );
};

exports.isnan = isnan;
