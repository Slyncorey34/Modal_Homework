$(document).ready(
	function() {
		$('#nav_bar a').on('click', function() {
			$('#modal').show(1100,function()  {
			$('#modal').on('click', function(){
			$('#modal').hide();
			})		
		});
	});
});
