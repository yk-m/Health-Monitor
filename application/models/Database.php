<?php namespace Models;

class Database {
	const HOST_NAME = "192.168.33.10";
	const USER_NAME = "pma";
	const PASSWORD = "vagrant";
	const DATABASE_NAME = "app";
	const DSN = "mysql:dbname=" . self::DATABASE_NAME . ";host=" . self::HOST_NAME;

	public $db = null;

	function __construct() {
		$this->db = new \PDO(
			self::DSN
		  , self::USER_NAME
		  , self::PASSWORD
		  , array( \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION )
		);
	}

	function __destruct() {
		$this->db = null;
	}
}