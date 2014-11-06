(function(exports, undefined){

	'use strict';


/* js/src/isinstance.js */


var isinstance = function ( type, obj ) {

	return obj !== null &&
	       obj !== undefined &&
	       obj.constructor.prototype === type.prototype;

};

exports.isinstance = isinstance;

/* js/src/isnull.js */


var isnull = function ( obj ) {

	return obj === null;

};

exports.isnull = isnull;

/* js/src/isundefined.js */


var isundefined = function ( obj ) {

	return obj === undefined;

};

exports.isundefined = isundefined;

/* js/src/number */
/* js/src/number/isfinite.js */


var isfinite = function ( value ) {

	return isnumber( value ) &&
	       ! ispositiveinfinity( value ) &&
	       ! isnegativeinfinity( value ) &&
	       ! isnan( value );

};

exports.isfinite = isfinite;

/* js/src/number/isint.js */


var isint = function ( value ) {

	return isfinite( value ) && (value % 1 === 0);

};

exports.isint = isint;

/* js/src/number/isint32.js */


var isint32 = function ( value ) {

	return isfinite( value ) && value === (value | 0);

};

exports.isint32 = isint32;

/* js/src/number/isnan.js */


var isnan = function ( value ) {
	return isnumber( value ) && isNaN( value );
};

exports.isnan = isnan;

/* js/src/number/isnegativeinfinity.js */


var isnegativeinfinity = function ( value ) {
	return value === -Infinity;
};

exports.isnegativeinfinity = isnegativeinfinity;

/* js/src/number/isnumber.js */


var isnumber = function ( value ) {

	return isinstance( Number, value );

};

exports.isnumber = isnumber;

/* js/src/number/ispositiveinfinity.js */


var ispositiveinfinity = function ( value ) {
	return value === Infinity;
};

exports.ispositiveinfinity = ispositiveinfinity;

/* js/src/object */
/* js/src/object/isarray.js */


var isarray = function ( value ) {

	return isinstance( Array, value );

};

exports.isarray = isarray;

/* js/src/object/isboolean.js */


var isboolean = function ( value ) {

	return isinstance( Boolean, value );

};

exports.isboolean = isboolean;

/* js/src/object/isdate.js */


var isdate = function ( value ) {

	return isinstance( Date, value );

};

exports.isdate = isdate;

/* js/src/object/isfunction.js */


var isfunction = function ( value ) {

	return isinstance( Function, value );

};

exports.isfunction = isfunction;

/* js/src/object/isobject.js */


var isobject = function ( value ) {

	return isinstance( Object, value );

};

exports.isobject = isobject;

/* js/src/object/isregexp.js */


var isregexp = function ( value ) {

	return isinstance( RegExp, value );

};

exports.isregexp = isregexp;

/* js/src/object/isstring.js */


var isstring = function ( value ) {

	return isinstance( String, value );

};

exports.isstring = isstring;

})(typeof exports === 'undefined' ? this['type'] = {} : exports);
