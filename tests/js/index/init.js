
$(function(){
	$(".switch").click(function () {
		$(".index > .forms > section").toggle(
			{ effect:'fade', duration:500 }
		);
	});
});