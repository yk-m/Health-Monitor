(function(){

var Weight = function () {};

Weight.prototype.fetch = function ( year, month, onFetchSuccess ) {
	$.ajax( {
		type: "POST"
	  , url:  "/weight/get"
	  , data: {
			'year':  year
		  , 'month': month
		}
	  , success: function ( data, dataType ) {
			console.log( data === 'nodata' );
			if ( data === 'nodata' ) {
				onFetchSuccess( false, year, month );
				return;
			}

			var graph_data = []
			  , i = 0
			;
			for ( var key in data ) {
				graph_data.push( {
					x: new Date( key )
				  , y: data[key]
				} );
			}
			onFetchSuccess( graph_data );
		}
	} );
}

Weight.prototype.insert = function ( year, month, date, weight, onInsertSuccess ) {
	$.ajax( {
		type: "POST"
	  , url:  "/weight/add"
	  , data: {
			'year':  year
		  , 'month': month
		  , 'date' : date
		  , 'weight' : weight
		}
	  , success: function ( data ) {
			console.log( data );
			if ( data === 'success' )
				onInsertSuccess();
		}
	} );
}

Weight.prototype.delete = function ( year, month, date, onDeleteSuccess ) {
	$.ajax( {
		type: "POST"
	  , url:  "/weight/delete"
	  , data: {
			'year':  year
		  , 'month': month
		  , 'date' : date
		}
	  , success: function ( data ) {
			console.log( data );
			if ( data === 'success' )
				onDeleteSuccess();
		}
	} );
}

window.Weight = Weight;

})();