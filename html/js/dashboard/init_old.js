$(function() {
	$(document).on("keypress", "input:not(.allow_submit)", function(event) {
		return event.which !== 13;
	});
});

$(function(){
	// Modal
	var wrapper = $( '#input_area' )
	  , date_element = $( '#input_area h1' )
	  , onShow  = function( a ) {
			var day = a[0];
			date_element.html( day.month + ' ' + day.date + ', ' + day.year )
	  }
	  , modal = new Modal( wrapper, $( '.modal-background' ), onShow )
	;

	wrapper.find( '.modal-close' ).click( modal.getCloseFunction() );

	var elements = {};
	elements.error = $( '#input_area p.error' );
	elements.date  = $( '#input_area h1' );
	elements.weightinput = $( '#input_area input[type="text"]' );


	// Graph
	var graph_canvas = $("#weight")
	  , weight = new Weight()
	  , graph  = new Graph( graph_canvas )
	  , graph_update = graph.getUpdateFunction()
	;

	// Calendar
	var date = new Date()
	  , year = date.getFullYear()
	  , month = date.getMonth()+1
	  , calendar = new Calendar( $( '.calendar' ), year, month, null, (function () {
			var openModal = modal.getOpenFunction();
			return function ( a ) {
				openModal( a );
				elements.error.hide();
			}
		})() )
	;

	weight.fetch( year, month, function( graph_data, year, month ) {
		(graph.getDrawFunction())( graph_data );

		var dates_class = {};
		for ( var i = 0; i < graph_data.length; i++ ) {
			dates_class[ graph_data[i].x.getDate() ] = "complete";
		}
		console.log( dates_class, year, month );
		calendar.update( year, month, dates_class );
	} );

	var update = function ( graph_data, year, month ) {
		graph_update( graph_data );

		var dates_class = {};
		for ( var i = 0; i < graph_data.length; i++ ) {
			dates_class[ graph_data[i].x.getDate() ] = "complete";
		}
		calendar.update( year, month, dates_class );
	}


	$( '#input_area input[type="button"]' ).click( function () {
		var date_area_value = elements.date.html()
		  , year  = -( -dateFormat( date_area_value, "yyyy" ) )
		  , month = -( -dateFormat( date_area_value, "m" ) )
		  , date  = -( -dateFormat( date_area_value, "d" ) )
		  , weight_num = elements.weightinput.val()
		;
		elements.error.hide();
		if( weight_num.match(/\+d\.\+d/) ) {
			elements.error.html( "The Weight field must be a number." );
			elements.error.show( { effect:'fade', duration:500 } );
			return;
		}
		weight_num = -(-weight_num);
		weight.insert(
			year, month, date, weight_num
		  , weight.fetch.bind( null, year, month, update )
		);
		(modal.getCloseFunction())();
	} );


	$( '.calendar .controller li.next a' ).click( function () {
		month++;
		if ( month == 13 ) {
			month = 1;
			year++;
		}
		weight.fetch( year, month, update );
	} );

	$( '.calendar .controller li.prev a' ).click( function () {
		month--;
		if ( month == 0 ) {
			month = 12;
			year--;
		}
		weight.fetch( year, month, update );
	} );
});