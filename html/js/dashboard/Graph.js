(function(){
var color = {
		pink: "247,202,201"
	  , blue: "145,168,208"
	  , black: "85,85,80"
	  , beige: "249, 244, 232"
	}
  , fonts = "'Raleway', sans-serif"

  , options = {
		scaleShowGridLines : true
	  , scaleGridLineColor : "rgba(" + color.black + ", 0.1 )"
	  , scaleGridLineWidth : 1
	  , scaleFontFamily: fonts
	  , scaleType: "date"
	  , scaleTimeFormat: " "
	  , scaleDateTimeFormat: "mmm d"
	  , bezierCurve : false
	  , pointDotRadius : 4
	  , pointDotStrokeWidth : 1
	  , datasetStrokeWidth : 2
	  , tooltipFillColor: "rgb( " + color.black + " )"
	  , tooltipFontFamily: fonts
	  , tooltipFontColor: "rgb( " + color.beige + " )"
	  , tooltipTitleFontFamily: fonts
	  , tooltipTitleFontStyle: "normal"
	  , tooltipTitleFontColor: "rgb( " + color.beige + " )"
	  , tooltipTemplate: "<%=argLabel%> ;  <%=valueLabel%>kg"
	}

  , preferences = {
		label: "Weight"
	  , fillColor:   "rgba(" + color.pink + ", 0.2)"
	  , strokeColor: "rgba(" + color.pink + ", 1)"
	  , pointColor:  "rgba(" + color.pink + ", 1)"
	  , pointStrokeColor:   "rgb(" + color.beige + ")"
	  , pointHighlightFill: "rgb(" + color.beige + ")"
	  , pointHighlightStroke: "rgba(" + color.pink + ", 1)"
	}
;

var Graph = function ( graph_canvas, onClick ) {
	this.graph = graph_canvas;
	this.ctx   = this.graph.get(0).getContext("2d");
	this.ctx.canvas.width  = this.graph.width();
	this.ctx.canvas.height = this.graph.height();

	this.draw = getDrawFunction( this );
	this.update = getUpdateFunction( this );

	setClickFunction( this, onClick );
}

function getDrawFunction ( self ) {
	return function ( graph_data ) {
		var data = {
			datasets: [ preferences ]
		};
		data.datasets[0].data = graph_data || [];

		self.chart = new Chart( self.ctx );
		self.weight_chart = self.chart.Scatter( data, options );
	}
}

function getUpdateFunction( self ) {
	var nodata = false;
	return function ( graph_data ) {
		if ( !graph_data && nodata ) {
			return;
		}
		if ( !graph_data )
			nodata = true;
		else
			nodata = false

		var data = {
			datasets: [ preferences ]
		};
		data.datasets[0].data = graph_data || [];

		self.weight_chart.clear();
		self.weight_chart = self.chart.Scatter( data, options );
	}
}

function setClickFunction( self, f ) {
	self.graph.mousemove( function (e) {
		var points = self.weight_chart.getPointsAtEvent(e);
		if ( points.length > 0 ) {
			self.graph.css( "cursor", "pointer" );
			return;
		}
		self.graph.css( "cursor", "default" );
	} );

	self.graph.click( function (e) {
		var points = self.weight_chart.getPointsAtEvent(e);
		if ( points.length === 0 )
			return;

		console.log( points );
		for ( var i = 0; i < points.length; i++ )
			f( new Date( points[0].arg ), points[0].value );
	} );
}

window.Graph = Graph;

})();