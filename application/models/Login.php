<?php namespace Models;

class Login {

	private $db  = null;
	private $onetime_password = null;

	function __construct(){
		$this->db = ( new Database() )->db;
	}

	public function execute( $id, $password ) {
		$st = $this->db->prepare( '
			select * from users where id = :id;'
		);
		$rs = $st->execute( array( ':id' => $id ) );
		$count = 0;
		while ( ( $row = $st->fetch( \PDO::FETCH_ASSOC ) ) ) {
			$id = $row["id"];
			$db_password = $row["password"];
			$count++;
		}

		if ( $count != 1 )
			throw new \LoginException( "invalid_id" );

		if ( !password_verify( $password, $db_password ) )
			throw new \LoginException( "invalid_pass" );
	}
}