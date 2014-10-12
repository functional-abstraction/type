
var util, one, two;

util = require("util");

one = function ( n, v ) {

	var msg;

	msg = util.format("type.isnegativeinfinity(%s) === %s", n, v);

	deepEqual(type.isnegativeinfinity(n), v, msg);
};

two = function ( n, v ) {
	one(  n, v );
	one( -n, v );
};



test( "isnegativeinfinity", function () {

	one( 0, false );
	one( NaN, false );
	one( Infinity, false );
	one( -Infinity, true );
	one( +Infinity, false );


	two( 1, false );
	two( 2, false );

	two( 0.000001, false );
	two( 1.2121289e127, false );
	two( Math.pow(2, 31) - 1, false );
	two( Math.pow(2, 32), false );
	two( Math.pow(2, 32) - 1, false );
	two( Math.pow(2, 53) - 1, false );

	one(  Math.pow(2, 31), false );
	one( -Math.pow(2, 31), false );

	two( Math.PI, false );
	two( Math.E, false );


	one( null, false );
	one( undefined, false );
	one( "", false );
	one( "0", false );
	one( "1", false );
	one( "-1", false );
	one( "NaN", false );
	one( "Infinity", false );
	one( "-Infinity", false );
	one( "+Infinity", false );
	one( true, false );
	one( false, false );
	one( [], false );
	one( [0], false );
	one( [1], false );
	one( {}, false );
	one( { 0 : 0 }, false );
	one( { 1 : 1 }, false );



});
