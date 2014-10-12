(function(exports, undefined){

	'use strict';


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

	return (typeof value) === "number";

};

exports.isnumber = isnumber;

/* js/src/number/ispositiveinfinity.js */

var ispositiveinfinity = function ( value ) {
	return value === Infinity;
};

exports.ispositiveinfinity = ispositiveinfinity;

})(typeof exports === 'undefined' ? this['type'] = {} : exports);
