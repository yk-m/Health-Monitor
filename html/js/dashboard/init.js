$(function(){
Dashboard( {
	modal: {
		content:    $( '#input_area' )
	  , background: $( '.modal-background' )
	  , close:      $( '#input_area .modal-close' )
	}
  , weight_form: {
		wrapper: $( '#input_area' )
	  , error:  $( '#input_area p.error' )
	  , date:   $( '#input_area h1' )
	  , weight: $( '#input_area input[type="text"]' )
	  , add:    $( '#input_area input[name="add"]' )
	  , delete: $( '#input_area input[name="delete"]' )
	}
  , graph: {
		canvas: $( "#weight" )
	}
  , calendar: {
		wrapper: $( '.calendar' )
	  , controller: {
			next: $( '.calendar .controller li.next a' )
		  , prev: $( '.calendar .controller li.prev a' )
		}
	}
} );

});