<?php

class Application {
	private $server;
	private $cookie;
	private $get;
	private $post;
	private $now;

	function __construct( $server, $cookie, $get, $post, \DateTime $now ) {
		$this->server = $server;
		$this->cookie = $this->escape( $cookie );
		$this->get    = $this->escape( $get );
		$this->post   = $this->escape( $post );
		$this->now    = $now;
	}

	function escape( $array ) {
		if ( !is_array( $array ) ) {
			return htmlspecialchars( $array, ENT_QUOTES, 'UTF-8' );
		}

		$escaped = $array;
		foreach( $escaped as $key => $val ) {
			if ( is_array( $val ) ) {
				$escaped[ $key ] = $this->escape( $val );
				continue;
			}

			$val = htmlspecialchars( $val, ENT_QUOTES, 'UTF-8' );
			$escaped[ $key ] = $val;
		}
		return $escaped;
	}

	public function __get( $name ) {
		return $this->$name;
	}

	public function __call( $name, $arguments ) {
		if ( $name === 'get' )
			return $this->$get[ $arguments ];
		if ( $name === 'post' )
			return $this->$post[ $arguments ];

		throw new BadMethodCallException( "Call to undefined method Application::{$name}()" );
	}

	public function execute( \Teto\Routing\Action $action )
	{
		list( $controller_name, $method ) = $action->value;
		$controller = "\\Controllers\\$controller_name";

		$response = (new $controller($this))->$method($action);
	}

	public static function getRoutingMap()
	{
		return [
			['GET',  '/',                    ['IndexController',             'index'    ] ],
			['GET',  '/login',               ['IndexController',             'login'    ] ],
			['GET',  '/register',            ['IndexController',             'register' ] ],
			['GET',  '/logout',              ['AuthController',              'logout'   ] ],
			['GET',  '/dashboard',           ['DashboardController',         'dashboard'] ],
			['GET',  '/settings',            ['DashboardController',         'setting'  ] ],
			['POST', '/login',               ['AjaxRequestController',       'login'    ] ],
			['POST', '/register',            ['AjaxRequestController',       'register' ] ],
			['POST', '/weight/get',          ['AjaxWeightRequestController', 'fetch'    ] ],
			['POST', '/weight/add',          ['AjaxWeightRequestController', 'insert'   ] ],
			['POST', '/weight/delete',       ['AjaxWeightRequestController', 'delete'   ] ],
			 '#404'   =>                     ['ErrorController',             'NotFound' ],
		];
	}
}