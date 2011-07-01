jQuery.fn.parentheses = function (options) {
	var settings = jQuery.extend({
		message: "hi, how are you?"
	}, options);
	var text = "(" + settings.message + ") " + $(this).html();
	$(this).html(text);
}