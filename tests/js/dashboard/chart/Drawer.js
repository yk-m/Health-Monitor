var color = {
	pink: "247,202,201"
  , blue: "145,168,208"
  , black: "85,85,80"
  , beige: "249, 244, 232"
}

var data1 = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor:   "rgba(" + color.pink + ",0.2)",
			strokeColor: "rgba(" + color.pink + ",1)",
			pointColor:  "rgba(" + color.pink + ",1)",
			pointStrokeColor:   "rgb(" + color.beige + ")",
			pointHighlightFill: "rgb(" + color.beige + ")",
			pointHighlightStroke: "rgba(" + color.pink + ",1)",
			data: [null,50,40,100]
		}
	]
};

var data2 = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My Second dataset",
			fillColor:   "rgba(" + color.blue + ",0.2)",
			strokeColor: "rgba(" + color.blue + ",1)",
			pointColor:  "rgba(" + color.blue + ",1)",
			pointStrokeColor:   "rgb(" + color.beige + ")",
			pointHighlightFill: "rgb(" + color.beige + ")",
			pointHighlightStroke: "rgba(" + color.blue + ",1)",
			data: [28, 48, 40, 19, 86, 27, 90]
		}
	]
};

var fonts = "'Raleway', sans-serif"
  , options = {
	scaleShowGridLines : true,
	scaleGridLineColor : "rgba(" + color.black + ",.05)",
	scaleGridLineWidth : 1,
	scaleFontFamily: fonts,
	scaleShowHorizontalLines: true,
	scaleShowVerticalLines: true,
	bezierCurve : true,
	bezierCurveTension : 0.4,
	pointDot : true,
	pointDotRadius : 4,
	pointDotStrokeWidth : 1,
	pointHitDetectionRadius : 20,
	datasetStroke : true,
	datasetStrokeWidth : 2,
	tooltipFillColor: "rgb( " + color.black + " )",
	tooltipFontFamily: fonts,
	tooltipFontColor: "rgb( " + color.beige + " )",
	tooltipTitleFontFamily: fonts,
	tooltipTitleFontStyle: "normal",
	tooltipTitleFontColor: "rgb( " + color.beige + " )",
};

$(function(){
	var wrapper = $("#weight")
	  , ctx = $("#weight").get(0).getContext("2d")
	;

	ctx.canvas.width  = wrapper.width();
	ctx.canvas.height = wrapper.height();
	weight_chart = new Chart( ctx );
	dp();


	function dp() {
		weight_chart.Line(data1, options);
		// setTimeout( function() {
		// 	db();
		// }, 5000 );
	};
	function db() {
		weight_chart.Line(data2, options);
		// setTimeout( function() {
		// 	dp();
		// }, 5000 );
	};
});