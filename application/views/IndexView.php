<?php namespace Views;

class IndexView {

	private $smarty = null;

	function __construct() {
		$this->smarty = \SmartyFactory::generate();
		$this->smarty->assign( 'css_filename', 'index' );
	}

	public function login() {
		$this->smarty->assign( 'page_title', 'Login' );
		$this->smarty->assign( 'js_include', '
			<script type="text/javascript" src="js/Confirmer.js"></script>
			<script type="text/javascript" src="js/index/Auth.js"></script>
			<script type="text/javascript" src="js/index/init.js"></script>
			<script type="text/javascript" src="js/index/login.js"></script>
		' );
		$this->smarty->display( 'index.tpl' );
	}

	public function register() {
		$this->smarty->assign( 'page_title', 'Register' );
		$this->smarty->assign( 'js_include', '
			<script type="text/javascript" src="js/Confirmer.js"></script>
			<script type="text/javascript" src="js/index/Auth.js"></script>
			<script type="text/javascript" src="js/index/init.js"></script>
			<script type="text/javascript" src="js/index/register.js"></script>
		' );
		$this->smarty->display( 'index.tpl' );
	}
}