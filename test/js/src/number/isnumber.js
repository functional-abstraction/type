
var util, one, two;

util = require( "util" );

one = function ( n, v ) {

	var msg;

	msg = util.format( "type.isnumber( %s ) === %s", n, v );

	deepEqual( type.isnumber( n ), v, msg );
};

two = function ( n, v ) {
	one(  n, v );
	one( -n, v );
};



test( "isnumber", function () {

	one( 0, true );
	one( NaN, true );
	one( Infinity, true );
	one( -Infinity, true );
	one( +Infinity, true );

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


	one( [], false );
	one( [0], false );
	one( [1], false );

	one( true, false );
	one( false, false );

	one( new Date(), false );

	one( Number, false );
	one( Array, false );
	one( Boolean, false );
	one( Date, false );
	one( Function, false );
	one( Object, false );
	one( RegExp, false );
	one( String, false );
	one( function () {}, false );

	one( {}, false );
	one( { 0 : 0 }, false );
	one( { 1 : 1 }, false );

	one( /a/, false );

	one( "", false );
	one( "0", false );
	one( "1", false );
	one( "-1", false );
	one( "NaN", false );
	one( "Infinity", false );
	one( "-Infinity", false );
	one( "+Infinity", false );

	one( null, false );

	one( undefined, false );

});
