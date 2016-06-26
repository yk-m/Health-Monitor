(function(){

var assets = {
		month_names: [
			'January', 'February', 'March', 'April'
		  , 'May', 'June', 'July', 'August'
		  , 'September', 'October', 'November', 'December'
		]
	  , day_names  : [
			'Sun', 'Mon', 'Tue', 'Wed'
		  , 'Thu', 'Fry', 'Sat'
		]
	  , day_num: 7
	}
;

var classes = {
	caption: {
		year : "caption_year"
	  , month: "caption_month"
	}
}

function getMonthName( month ) {
	return assets.month_names[ month - 1 ];
}

function generateHeaderRow() {
	var header_row = "";
	for ( var column = 0; column < assets.day_num; column++ ) {
		header_row += "<th>" + assets.day_names[ column ] + "</th>";
	}
	return header_row;
}

function appendBody ( tbody, year, month, date_statuses, date_onclick ) {
	var first = new Date( year, month-1, 1 )
	  , last  = new Date( year, month  , 0 )
	  , first_day = first.getDay()
	  , last_date = last.getDate()
	  , skip = true
	  , date = 1
	;

	date_statuses  = date_statuses || {};

	for ( var row = 0; row < 6; row++ ) {
		var tr = $( '<tr>' );
		for ( var column = 0; column < assets.day_num; column++ ) {
			if ( row === 0 && first_day === column )
				skip = false;
			if ( date > last_date )
				skip = true;

			if ( skip ) {
				var td = $( '<td>&nbsp;</td>' ).appendTo( tr );
				continue;
			}

			date_statuses[date] = date_statuses[date] || {};

			var td = $(
				'<td class="' + ( date_statuses[date].class || "" ) + '">' + date + '</td>'
			).attr('calendar-date', date ).appendTo( tr );
			$(document).off('click', 'td[calendar-date="' + date + '"]');
			$(document).on(
				'click'
			  , 'td[calendar-date="' + date + '"]'
			  , date_onclick.bind( null, new Date( year, month-1, date ), date_statuses[date].weight )
			);

			date++;
		}
		tbody.append( tr );
	}
}

function appendCaption ( caption, year, month ) {
	caption.append(
		'<span class="' + classes.caption.year  + '">' + year + '</span>'
	  + '<span class="' + classes.caption.month + '">' + getMonthName( month ) + '</span>'
	);
}

var Calendar = function ( wrapper ) {
	this.elements = {};
	this.elements.table = $( '<table>' ).appendTo( $( wrapper ) );
}

Calendar.prototype.generate = function ( year, month, date_statuses, date_onclick ) {
	this.date_onclick = date_onclick || function () {};

	this.elements.caption = $( '<caption>' ).appendTo( this.elements.table );
	appendCaption( this.elements.caption, year, month )

	this.elements.thead = $(
		'<thead>' + generateHeaderRow() + '</thead>'
	).appendTo( this.elements.table );

	this.elements.tbody = $( '<tbody>' ).appendTo( this.elements.table );
	appendBody( this.elements.tbody, year, month, date_statuses, date_onclick );
}

Calendar.prototype.update = function ( year, month, date_statuses, date_onclick ) {
	this.date_onclick = date_onclick || this.date_onclick;

	this.elements.caption.empty();
	appendCaption(  this.elements.caption, year, month  );
	this.elements.tbody.empty();
	appendBody( this.elements.tbody, year, month, date_statuses, this.date_onclick );
}

window.Calendar = Calendar;

})();