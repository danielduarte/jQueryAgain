$(document).ready(function() {
	// ---- Another tests ----
	// Misc
	$("#mydiv > div:first").addClass("blue");
	$("#mydiv > a").addClass("red");
	$("*[id]").not("ol").css("color", "#888888");
	$("a[href='#'],a[href='']").append(" (NO LINK!)");
	$("a[href*='#']").append(" << link inside this page");
	$("a,button,input").click(function () {
		$(this).hide();
		$(this).slideToggle();
	});
	$("a").click(function () {
		$(this).parents().first().css("border", "15px solid green");
		$(this).next().css("border", "5px solid blue");
	});

	
	// Optimizing with end() (Reduces searching for selector0)
	/* - Option 1 (not optimized)
	$(selector0).find(selector1).operationA();
	$(selector0).find(selector2).operationB();
	$(selector0).find(selector3).operationC();
	$(selector0).find(selector4).operationD();
	*/
	/* - Option 2 (optimized using end() method)
	$(selector0).find(selector1).operationA()
          .end().find(selector2).operationB()
          .end().find(selector3).operationC()
          .end().find(selector4).operationD();
	*/
	
	// ---- Tutorial tests ----
	// Class handling
	$("#orderedlist").addClass("red");
	$("#orderedlist > li").addClass("blue");

	// Event handling
	$("#orderedlist > li:last").hover(
		function () { $(this).addClass("green"); },
		function () { $(this).removeClass("green"); }
	);
	
	// Useful methods
	$("#orderedlist").find("li").each(function (index) {
		$(this).append(" What's this? item: " + (index + 1));
	});
	$("#reset").click(function () {
		$("form").each(function () {
			alert("You are about to reset the form \'" + this.id + "'");
			this.reset();
		});
	});
	$("li").not(":has(ul)").css("border", "1px solid black");
	$("a[name]").css("background", "#eee");
	$("a[href*='/content/gallery']").click(function () {
		alert("This HTML element links to something in /content/gallery:\n" + $(this).html());
	});
	$("a").hover(
		function () {
			$(this).parents("div").first().addClass("highlight");
		},
		function () {
			$(this).parents("div").first().removeClass("highlight");
		}
	);
	

	
});
