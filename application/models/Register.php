<?php namespace Models;

class Register {

	private $db  = null;
	private $onetime_password = null;

	function __construct(){
		$this->db = ( new Database() )->db;
	}

	public function execute( User $user, $now ){
		$hash = password_hash( $user->password, PASSWORD_BCRYPT );
		$this->onetime_password = $this->generateOnetimePassword();

		$st = $this->db->prepare( '
			insert into users ( id, password, last_change_pass_time, register_time )
			values ( :id, :password, :last_change_pass_time, :register_time )
		');

		$result = $st->execute( array(
			':id'                    => $user->id
		  , ':password'              => $hash
		  , ':last_change_pass_time' => $now->format('Y-m-d H:i:s')
		  , ':register_time'         => $now->format('Y-m-d H:i:s')
		) );

		if ( !$result )
			throw new \RegisterException( "duplicate_id" );
	}

	private function getOnetimePassword() {
		return $onetime_password;
	}

	private function generateOnetimePassword() {
		$TOKEN_LENGTH = 16;
		$bytes = openssl_random_pseudo_bytes( $TOKEN_LENGTH );
		return password_hash( $bytes, PASSWORD_BCRYPT );
	}

	public function isExistUserId( $id ) {
		$st = $db->prepare('
			selsct count(*) as cnt from users where id = ? ;
		');
		$rs = $st->execute( array( $id ) );

		while ( $row = $rs->fetchRow( \PDO::FETCH_ASSOC ) ) {
			$count = $row['cnt'];
		}

		if ($count == 0)
			return false;

		return true;
	}

}