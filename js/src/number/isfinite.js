

var isfinite = function ( value ) {

	return isnumber( value ) &&
	       ! ispositiveinfinity( value ) &&
	       ! isnegativeinfinity( value ) &&
	       ! isnan( value );

};

exports.isfinite = isfinite;
