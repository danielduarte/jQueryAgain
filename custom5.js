$(function () {
	$("#content1").click(function () {
		$(this).parentheses();
	});

	$("#content2").click(function () {
		$(this).parentheses({message: "hi!"});
	});

});
