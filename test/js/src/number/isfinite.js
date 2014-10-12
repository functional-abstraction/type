
var util, one, two;

util = require("util");

one = function ( n, v ) {

	var msg;

	msg = util.format("type.isfinite(%s) === %s", n, v);

	deepEqual(type.isfinite(n), v, msg);
};

two = function ( n, v ) {
	one(  n, v );
	one( -n, v );
};



test( "isfinite", function () {

	one( 0, true );
	one( NaN, false );
	one( Infinity, false );
	one( -Infinity, false );
	one( +Infinity, false );


	two( 1, true );
	two( 2, true );

	two( 0.000001, true );
	two( 1.2121289e127, true );
	two( Math.pow(2, 31) - 1, true );
	two( Math.pow(2, 32), true );
	two( Math.pow(2, 32) - 1, true );
	two( Math.pow(2, 53) - 1, true );

	one(  Math.pow(2, 31), true );
	one( -Math.pow(2, 31), true );

	two( Math.PI, true );
	two( Math.E, true );


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
