import test from 'ava';
import * as type from '../../../src';


import util from "util" ;

function one ( n, v ) {

	var msg;

	msg = util.format( "type.isarray( %s ) === %s", n, v );

	t.deepEqual( type.isarray( n ), v, msg );
};

function two ( n, v ) {
	one(  n, v );
	one( -n, v );
};



test( "isarray", t => {

	one( 0, false );
	one( NaN, false );
	one( Infinity, false );
	one( -Infinity, false );
	one( +Infinity, false );

	two( 1, false );
	two( 2, false );

	two( 0.000001, false );
	two( 1.2121289e127, false );
	two( Math.pow( 2, 31 ) - 1, false );
	two( Math.pow( 2, 32 ), false );
	two( Math.pow( 2, 32 ) - 1, false );
	two( Math.pow( 2, 53 ) - 1, false );

	one(  Math.pow( 2, 31 ), false );
	one( -Math.pow( 2, 31 ), false );

	two( Math.PI, false );
	two( Math.E, false );


	one( [], true );
	one( [0], true );
	one( [1], true );

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
