<?php namespace Controllers;

class IndexController {

	private $view;

	function __construct( $app ) {
		$this->view = new \Views\IndexView();
		$this->auth = new AuthController( $app );
		$this->loginCheck( $app );
	}

	public function index() {
		header("Location: /login");
	}

	public function login() {
		$this->view->login();
	}

	public function register() {
		$this->view->register();
	}

	public function logout() {
		$this->auth->logout();
	}

	private function loginCheck( $app ) {
		if ( !$this->auth->isUserLoggedIn() )
			return;

		header("Location: /dashboard");
	}

}