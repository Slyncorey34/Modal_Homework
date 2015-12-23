
// Javascript using jquery library to reveal and hide the modal:
$(document).ready(
	function(){
// when user clicks on the Donate link, show the text modal
	$(".my-link").on("click",
	function(e) {
		e.preventDefault();
		var $image = $("#p");
		$image.attr("src",$(this).attr("src") ); 
	$(".modal").show(1000,function() { 
	// $("#this-image").attr("src","ab.jpg");

	$(".modal").on("click",
	function() {
		$(".modal").hide();

	});
	});
});  
});
		