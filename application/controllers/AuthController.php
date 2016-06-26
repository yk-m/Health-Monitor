<?php namespace Controllers;

class AuthController {

	private $app = null;

	function __construct( $app ) {
		session_start();
		session_write_close();
		$this->app = $app;
	}

	public function register() {
		$register = new \Models\Register();
		$user     = new \Models\User( $this->app->post );

		$result = $register->execute( $user, $this->app->now );
	}

	public function login(){
		$login = new \Models\Login();
		$user  = new \Models\User( $this->app->post );

		$result = $login->execute( $user->id, $user->password );

		session_regenerate_id(true);
		$this->setSession( 'id', $user->id );
		$this->setSession( 'token', $this->get_csrf_token() );
	}

	public function logout() {
		$_SESSION = array();
		if (isset($_COOKIE[session_name()])) {
			setcookie(session_name(), '', time()-42000, '/');
		}
		session_destroy();

		header("Location: /");
	}

	public function isUserLoggedIn() {
		if ( isset($_SESSION["token"] ) )
			return true;
		return false;
	}

	public function getUserID(){
		if ( !isset( $_SESSION["id"] ) )
			throw new \LoginException( "not_logged_in" );

		return $_SESSION["id"];
	}

	private function get_csrf_token() {
		$TOKEN_LENGTH = 16;//16*2=32byte
		$bytes = openssl_random_pseudo_bytes($TOKEN_LENGTH);
		return bin2hex($bytes);
	}

	private function setSession( $key, $value ) {
		session_start();
		$_SESSION[$key] = $value;
		session_write_close();
	}
}