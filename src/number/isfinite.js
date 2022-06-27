

export function isfinite ( value ) {

	return isnumber( value ) &&
	       ! ispositiveinfinity( value ) &&
	       ! isnegativeinfinity( value ) &&
	       ! isnan( value );

}

