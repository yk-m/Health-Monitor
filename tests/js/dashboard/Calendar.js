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

function appendBody ( tbody, year, month, dates_class, date_onclick ) {
	var first = new Date( year, month-1, 1 )
	  , last  = new Date( year, month  , 0 )
	  , first_day = first.getDay()
	  , last_date = last.getDate()
	  , skip = true
	  , date = 1
	;

	dates_class  = dates_class || {};
	date_onclick = date_onclick || function () {};

	for ( var row = 0; row < 6; row++ ) {
		var tr = $( '<tr>' );
		for ( var column = 0; column < assets.day_num; column++ ) {
			if ( row === 0 && first_day === column )
				skip = false;
			if ( date > last_date )
				skip = true;

			var td = $(
				'<td class="' + ( dates_class[date] || "" ) + '">' + ( skip ? '&nbsp;' : date ) + '</td>'
			).attr('date-calendar-date', date ).appendTo( tr );
			$(document).off('click', 'td[date-calendar-date="' + date + '"]');
			$(document).on('click', 'td[date-calendar-date="' + date + '"]', date_onclick.bind( null, year, getMonthName( month ), date ) );

			if ( !skip )
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

var Calendar = function ( wrapper, year, month, dates_class, date_onclick ) {
	this.elements = {};
	this.elements.table = $( '<table>' ).appendTo( $( wrapper ) );
	this.date_onclick   = date_onclick;

	this.generate( year, month, dates_class );
}

Calendar.prototype.generate = function ( year, month, dates_class ) {
	this.elements.caption = $( '<caption>' ).appendTo( this.elements.table );
	appendCaption( this.elements.caption, year, month )

	this.elements.thead = $(
		'<thead>' + generateHeaderRow() + '</thead>'
	).appendTo( this.elements.table );

	this.elements.tbody = $( '<tbody>' ).appendTo( this.elements.table );
	appendBody( this.elements.tbody, year, month, dates_class, this.date_onclick );
}

Calendar.prototype.update = function ( year, month, dates_class, date_onclick ) {
	this.date_onclick = date_onclick || this.date_onclick;

	this.elements.caption.empty();
	appendCaption(  this.elements.caption, year, month  );
	this.elements.tbody.empty();
	appendBody( this.elements.tbody, year, month, dates_class, this.date_onclick );
}

window.Calendar = Calendar;

})();