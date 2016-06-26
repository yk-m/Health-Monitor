<?php namespace Controllers;

class AjaxRequestController {
	private $auth = null;
	private $app  = null;

	function __construct( $app ) {
		$this->app = $app;
		$this->auth = new \Controllers\AuthController( $this->app );
	}

	function login() {
		try {
			$this->auth->login();
		} catch ( \LoginException $e ) {
			echo $e->error_code;
			exit();
		} catch ( \Exception $e ) {
			echo 'unknown_error';
			exit();
		}

		echo 'success';
	}

	function register() {
		try {
			$this->auth->register();
			$this->auth->login();
		} catch ( \RegisterException $e ) {
			echo $e->error_code;
			exit();
		} catch ( \Exception $e ) {
			echo 'unknown_error';
			echo $e->getMessage();
			exit();
		}

		echo 'success';
	}
}