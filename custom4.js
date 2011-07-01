$(function () {
	
	$("#sortedtable").tablesorter({ widgets: ['zebra'] });

	$(".question").click(function () {
		var next = $(this).next()
		$(".answer").not(next).hide("slow");
		next.slideToggle();
	});

});