var color = {
	pink: "247,202,201"
  , blue: "145,168,208"
  , black: "85,85,80"
  , beige: "249, 244, 232"
}

var data1 = {
	datasets: [
		{
			label: "Weight",
			fillColor:   "rgba(" + color.pink + ", 0.2)",
			strokeColor: "rgba(" + color.pink + ", 1)",
			pointColor:  "rgba(" + color.pink + ", 1)",
			pointStrokeColor:   "rgb(" + color.beige + ")",
			pointHighlightFill: "rgb(" + color.beige + ")",
			pointHighlightStroke: "rgba(" + color.pink + ", 1)",
			data: [
				{
					x: new Date('2011-04-01'),
					y: 25
				},
				{
					x: new Date('2011-04-13'),
					y: 28
				},
				{
					x: new Date('2011-04-14'),
					y: 22
				},
				{
					x: new Date('2011-04-15'),
					y: 18
				},
				{
					x: new Date('2011-04-16'),
					y: 25
				},
				{
					x: new Date('2011-04-17'),
					y: 24
				},
				{
					x: new Date('2011-04-30'),
					y: 24
				}
			]
		}
	]
};

var data2 = {
	datasets: [
		{
			label: "Weight",
			fillColor:   "rgba(" + color.pink + ", 0.2)",
			strokeColor: "rgba(" + color.pink + ", 1)",
			pointColor:  "rgba(" + color.pink + ", 1)",
			pointStrokeColor:   "rgb(" + color.beige + ")",
			pointHighlightFill: "rgb(" + color.beige + ")",
			pointHighlightStroke: "rgba(" + color.pink + ", 1)",
			data: [
				{
					x: new Date('2011-05-01'),
					y: 25
				},
				{
					x: new Date('2011-05-13'),
					y: 28
				},
				{
					x: new Date('2011-05-14'),
					y: 22
				},
				{
					x: new Date('2011-05-15'),
					y: 18
				},
				{
					x: new Date('2011-05-16'),
					y: 25
				},
				{
					x: new Date('2011-05-17'),
					y: 24
				},
				{
					x: new Date('2011-05-31'),
					y: 24
				}
			]
		}
	]
};

var fonts = "'Raleway', sans-serif"
  , options = {
		scaleShowGridLines : true,
		scaleGridLineColor : "rgba(" + color.black + ", 0.1 )",
		scaleGridLineWidth : 1,
		scaleFontFamily: fonts,
		scaleType: "date",
		scaleDateTimeFormat: "mmm d",

		bezierCurve : false,
		pointDotRadius : 4,
		pointDotStrokeWidth : 1,
		datasetStrokeWidth : 2,
		tooltipFillColor: "rgb( " + color.black + " )",
		tooltipFontFamily: fonts,
		tooltipFontColor: "rgb( " + color.beige + " )",
		tooltipTitleFontFamily: fonts,
		tooltipTitleFontStyle: "normal",
		tooltipTitleFontColor: "rgb( " + color.beige + " )",

		tooltipTemplate: "<%=argLabel%> ;  <%=valueLabel%>kg",
	}
;

$(function(){
	var weight = $("#weight")
	  , ctx = weight.get(0).getContext("2d");

	ctx.canvas.width  = weight.width();
	ctx.canvas.height = weight.height();
	chart  = new Chart( ctx );
	weight_chart = chart.Scatter( data1, options );

	setTimeout( function () {
		weight_chart.clear();
		weight_chart = chart.Scatter( data2, options );
	}, 2000 )
});