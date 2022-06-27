

export function isint32 ( value ) {

	return isfinite( value ) && value === (value | 0);

}

