<?php namespace Controllers;

class ErrorController {
	static function NotFound() {
		echo '404 Not found';
		exit();
	}

	static function InternalServerError() {
		echo '500 Internal server error';
		exit();
	}
}