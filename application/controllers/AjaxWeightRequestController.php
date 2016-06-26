<?php namespace Controllers;

class AjaxWeightRequestController {
	private $app   = null;
	private $auth  = null;
	private $weight = null;

	function __construct( $app ) {
		$this->app = $app;
		$this->auth = new \Controllers\AuthController( $this->app );
		$this->weight = new \Models\Weight();
	}

	function fetch() {
		$this->weight = new \Models\Weight();

		try {
			$weights = $this->weight->fetch(
				$this->auth->getUserID()
			  , new \DateTime( "{$this->app->post[ 'year' ]}-{$this->app->post[ 'month' ]}-01" )
			);


			header('Content-Type: application/json');
			echo json_encode( $weights );
		} catch ( \Exception $e ) {
			echo 'nodata';
		}
	}

	function insert() {
		$this->weight = new \Models\Weight();

		try {
			$weights = $this->weight->insert(
				$this->auth->getUserID()
			  , new \DateTime( "{$this->app->post[ 'year' ]}-{$this->app->post[ 'month' ]}-{$this->app->post[ 'date' ]}" )
			  , $this->app->now
			  , $this->app->post[ 'weight' ]
			);

			echo 'success';
		} catch ( \FetchException $e ) {
			echo $e->error_code;
		} catch ( \LoginException $e ) {
			echo $e->error_code;
		} catch ( \Exception $e ) {
			echo 'unknown_error';
		}
	}

	function delete() {
		$this->weight = new \Models\Weight();

		try {
			$weights = $this->weight->delete(
				$this->auth->getUserID()
			  , new \DateTime( "{$this->app->post[ 'year' ]}-{$this->app->post[ 'month' ]}-{$this->app->post[ 'date' ]}" )
			);

			echo 'success';
		} catch ( \FetchException $e ) {
			echo $e->error_code;
		} catch ( \LoginException $e ) {
			echo $e->error_code;
		} catch ( \Exception $e ) {
			echo 'unknown_error';
		}
	}
}