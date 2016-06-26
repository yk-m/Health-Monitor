<?php

class LoginException extends Exception {
	public $error_code; // invalid_id, invalid_pass
	public function __construct( $error_code, $code = 0, Exception $previous = null ) {
		$this->error_code = $error_code;
		if ( $error_code == 'invalid_id' )
			$message = 'IDが存在しません';
		if ( $error_code == 'invalid_pass' )
			$message = 'Passwordが正しくありません．';
		if ( $error_code == 'no_logged_in' )
			$message = 'ログインしていません．';
		parent::__construct( $message, $code, $previous );
	}
}

class RegisterException extends Exception {
	public $error_code; // duplicate_id
	public function __construct( $error_code, $code = 0, Exception $previous = null ) {
		$this->error_code = $error_code;
		if ( $error_code == 'duplicate_id' )
			$message = 'このIDはすでに使われています．';
		parent::__construct( $message, $code, $previous );
	}
}

class FetchException extends Exception {
	public $error_code; // duplicate_id
	public function __construct( $error_code, $code = 0, Exception $previous = null ) {
		$this->error_code = $error_code;
		parent::__construct( "", $code, $previous );
	}
}