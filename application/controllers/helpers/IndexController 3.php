<?php namespace Controllers;

class IndexController {

	private $view;

	function __construct() {
		$this->view = new \Views\IndexView();
	}

	public function index( $app ) {
		$this->view->login();
	}

	public function login( $app ) {
		$this->view->login();
	}

	public function register( $app ) {
		$this->view->register();
	}

}