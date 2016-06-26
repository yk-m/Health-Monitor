<?php namespace Controllers;

class ErrorController {
	static function NotFound() {
		exit();
	}

	static function InternalServerError() {
		exit();
	}
}