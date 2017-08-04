// All HTML files link to this JS file
var counter = 1;
function slideDown() {
	$('.nav_').slideDown('slow');
}

function slideUp() {
	$('.nav_').slideUp('slow');
}

$('.click').on('click', function(){
	console.log("test");
	if (counter) {
		slideDown();
		counter = 0;
	} else {
		slideUp();
		counter = 1;
	}
});
