<?php namespace Models;

class User {
	private $id       = null
	      , $password = null
	      , $first    = null
	      , $last     = null
	;

	function __construct( $post ) {
		$this->id       = isset( $post[ 'id'       ] ) ? $post[ 'id'       ] : null;
		$this->password = isset( $post[ 'password' ] ) ? $post[ 'password' ] : null;
		$this->first    = isset( $post[ 'first'    ] ) ? $post[ 'first'    ] : null;
		$this->last     = isset( $post[ 'last'     ] ) ? $post[ 'last'     ] : null;
	}

	function __get( $name ) {
		return $this->$name;
	}
}