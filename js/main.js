$(document).ready(function() {
	/*
	Method 1: n00b mode
	*/
	$('#blocks > div.col-md-1').fadey();
	

	/*
	Method 2: Parameters

	$('#blocks > div.col-md-1').fadey({
		delay: 100,
		speed: 100
	});
	*/

	/*
	Method 3: Custom animation callback

	$('#blocks > div.col-md-1').fadey({
		delay: 500,
		speed: 500,
		callback: function(elem, delay, speed) {
			elem.delay(delay).show(speed);
		}
	});
	*/
});