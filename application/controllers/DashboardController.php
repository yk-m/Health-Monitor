<?php namespace Controllers;

class DashboardController {
	function __construct( $app ) {
		$this->auth = new AuthController( $app );
		$this->checkLogin();

		$this->view = new \Views\DashboardView();
	}

	public function dashboard() {
		$this->view->dashboard();
	}

	public function settings() {
		$this->view->dashboard();
	}

	private function checkLogin() {
		if ( $this->auth->isUserLoggedIn() ) {
			return true;
		}

		header("Location: /login");
	}
}