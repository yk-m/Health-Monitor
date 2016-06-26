
$(function(){
	var background = $( '.modal-background' )
	  , wrapper = $( '#input_area' )
	  , date_element = $( '#input_area h1' )
	  , options = {
			origin: ["middle", "center"]
	  }
	;
	wrapper.hide();
	background.hide();

	background.click( hideModal );
	$( '.modal-close' ).click( hideModal );

	function showModal( year, month, date ) {
		date_element.html( month + ' ' + date + ', ' + year );
		wrapper.show( 'fade', options, 500 );
		background.show();
	}
	function hideModal() {
		wrapper.hide( 'fade', options, 500 );
		background.hide();
	}

	var date = new Date()
	  , year = date.getFullYear()
	  , month = date.getMonth()+1
	  , calendar = new Calendar( $( '.calendar' ), year, month, null, showModal )
	;

	$( '.calendar .controller li.next a' ).click( function () {
		month++;
		if ( month == 13 ) {
			month = 1;
			year++;
		}
		calendar.update( year, month );
		console.log(month)
	} );
	$( '.calendar .controller li.prev a' ).click( function () {
		month--;
		if ( month == 0 ) {
			month = 12;
			year--;
		}
		calendar.update( year, month );
		console.log(month)
	} );
});