(function(){
var confirmer = new Confirmer();

var animation_option = { effect:'fade', duration:500 }
  , default_elements = {
		modal: {
			content:    null
		  , background: null
		  , close:      []
		}
	  , weight_form: {
			wrapper: null
		  , error:  null
		  , date:   null
		  , weight: null
		  , add: null
		  , delete: null
		}
	  , graph: {
			canvas: null
		}
	  , calendar: {
			wrapper: null
		  , controller: {
				next: null
			  , prev: null
			}
		}
	}
  , elements = {}
  , views = {}
  , models = {}
;

var today = new Date()
  , calendar = {
		year:  today.getFullYear()
	  , month: today.getMonth()+1
	}
  , selected_date
;

function initAsArray( a ) {
	a = a || [];
	if ( a instanceof Array )
		return a;
	return [ a ];
}

function generateDateStatuses( graph_data ) {
	var date_statuses = {};
	for ( var i = 0; i < graph_data.length; i++ ) {
		date_statuses[ graph_data[i].x.getDate() ] = {
			class: "complete"
		  , weight: graph_data[i].y
		};
	}
	return date_statuses;
}


var Dashboard = function ( elements ) {
	elements = elements || default_elements;
	elements.modal.close = initAsArray( elements.modal.close );

	views = {
		calendar: new Calendar( elements.calendar.wrapper )
	  , graph:    new Graph( elements.graph.canvas, openModal )
	  , modal:    new Modal( elements.modal.content, elements.modal.background )
	  , update:   function ( graph_data ) {
			views.graph.update( graph_data );
			views.calendar.update( calendar.year, calendar.month, generateDateStatuses( graph_data ) );
		}
	};

	models = {
		weight: new Weight()
	}

	$(function() {
		$(document).on("keypress", "input", function(event) {
			return event.which !== 13;
		});
	});


	// Fetch data -> draw graph & build calendar
	models.weight.fetch( calendar.year, calendar.month, function( graph_data ) {
		views.graph.draw( graph_data );
		views.calendar.generate( calendar.year, calendar.month, generateDateStatuses( graph_data ), openModal );
	} );


	// init Modal close button
	for( var i = 0; i < elements.modal.close.length; i++ ) {
		elements.modal.close[i].click( views.modal.close );
	}

	// init Weight add button
	elements.weight_form.add.click( addWeight );

	// init Weight delete button
	elements.weight_form.delete.click( deleteWeight );

	// init Calendar controller
	elements.calendar.controller.next.click( toNextMonth );
	elements.calendar.controller.prev.click( toPrevMonth );

	// init keypress event
	$( 'html' ).keyup( function( e ) {
		switch ( e.which ) {
			case 27: // Key[esc]
				views.modal.close();
			break;
		}

		if ( views.modal.isOpen() )
			return true;

		switch ( e.which ) {
			case 37: // Key[←]
				toPrevMonth();
			break;

			case 39: // Key[→]
				toNextMonth();
			break;
		}
	} );

	elements.modal.content.keyup( function ( e ) {
		switch ( e.which ) {
			case 13: // Key[return]
				elements.weight_form.add.trigger( "click" );
			break;
		}
	} );


	function openModal( date, weight ) {
		selected_date = date;
		elements.weight_form.error.hide();
		elements.weight_form.date.html( date.format( 'mmm d, yyyy' ) );
		elements.weight_form.weight.val( weight );

		if( weight ) {
			elements.weight_form.wrapper.addClass( "deletable" );
			elements.weight_form.delete.css( "display", "inline-block" );
		} else {
			elements.weight_form.wrapper.removeClass( "deletable" );
			elements.weight_form.delete.hide();
		}

		views.modal.open();
		elements.weight_form.weight.focus();
	}

	function addWeight() {
		var weight_num = elements.weight_form.weight.val();
		elements.weight_form.error.hide();

		try {
			confirmer.weight( weight_num );
		} catch ( e ) {
			elements.weight_form.error.html( e.message );
			elements.weight_form.error.show( animation_option );
			return;
		}
		weight_num = parseFloat( weight_num );

		var year  = selected_date.getFullYear()
		  , month = selected_date.getMonth()+1
		  , date  = selected_date.getDate()
		;

		models.weight.insert(
			year, month, date, weight_num
		  , models.weight.fetch.bind( null, year, month, views.update )
		);
		views.modal.close();
	}

	function deleteWeight() {
		var year  = selected_date.getFullYear()
		  , month = selected_date.getMonth()+1
		  , date  = selected_date.getDate()
		;

		models.weight.delete(
			year, month, date
		  , models.weight.fetch.bind( null, year, month, views.update )
		);
		views.modal.close();
	}

	function toNextMonth() {
		calendar.month++;
		if ( calendar.month == 13 ) {
			calendar.month = 1;
			calendar.year++;
		}
		models.weight.fetch( calendar.year, calendar.month, views.update );
	}

	function toPrevMonth() {
		calendar.month--;
		if ( calendar.month == 0 ) {
			calendar.month = 12;
			calendar.year--;
		}
		models.weight.fetch( calendar.year, calendar.month, views.update );
	}
}


window.Dashboard = Dashboard;

})();