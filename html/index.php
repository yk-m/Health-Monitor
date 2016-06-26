<?php

define('C_PATH_ROOT', '/var/www/health/');
define('C_PATH_PROGRAM', '/var/www/health/application/');

require_once C_PATH_PROGRAM . 'configs/loader.php';

call_user_func(function(){
	$current_time = new \DateTime;
	$app = new Application( $_SERVER, $_COOKIE, $_GET, $_POST, $current_time );
	$router = new \Teto\Routing\Router( $app->getRoutingMap() );

	$path = isset( $_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
	$action = $router->match( $_SERVER['REQUEST_METHOD'], $path );

	$app->execute( $action );
});