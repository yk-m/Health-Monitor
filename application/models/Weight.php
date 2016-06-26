<?php namespace Models;

class Weight {

	private $db  = null;

	function __construct(){
		$this->db = ( new Database() )->db;
	}

	public function fetch( $user_id, \DateTime $date ) {
		$st = $this->db->prepare( '
			select * from weight
			where user_id = "' . $user_id . '" and date_format( date, "%Y%m" )="' . $date->format('Ym') . '"
			order by date
		' );
		$rs = $st->execute();

		$weights = array();
		while ( ( $row = $st->fetch( \PDO::FETCH_ASSOC ) ) ) {
			$weights[ $row["date"] ] = $row["weight"];
		}

		if ( empty( $weights ) ) {
			throw new \FetchException( "nodata" );
		}

		return $weights;
	}

	private function deleteDuplicate( $user_id ) {
		$st = $this->db->prepare( '
			delete from weight where
				user_id = :user_id
				and register_date not in (
					select max_id from (
						select max( t1.register_date ) as max_id from weight as t1 group by t1.date
					) as t2
				)
			;
		');
		$rs = $st->execute( array(
			':user_id' => $user_id
		) );
	}

	public function insert( $user_id, \DateTime $date, \DateTime $now, $weight ) {
		$st = $this->db->prepare( '
			insert into weight ( user_id, date, weight, register_date )
			values ( :user_id, :date, :weight, :now )
		');

		$result = $st->execute( array(
			':user_id' => $user_id
		  , ':date'    => $date->format( 'Y-m-d' )
		  , ':weight'  => $weight
		  , ':now'     => $now->format('Y-m-d H:i:s')
		) );

		if ( !$result )
			throw new \FetchException( "insert_failure" );

		$this->deleteDuplicate( $user_id );
	}

	public function delete( $user_id, \DateTime $date ) {
		$st = $this->db->prepare( '
			delete from weight where
				user_id  = :user_id
				and date = :date
			;
		');

		$result = $st->execute( array(
			':user_id' => $user_id
		  , ':date'    => $date->format( 'Y-m-d' )
		) );
	}
}