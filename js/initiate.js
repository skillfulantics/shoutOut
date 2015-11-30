/*Custom Reusables*/
function showSkills() {
	$("#pitbull-cut, #eventTrigger").fadeTo("slow", 0);
};


/*Called Events/misc*/

$( "#eventTrigger" ).click(function() {
	if ( $("#form").is( ":hidden" ) ) {
		$("#form").slideDown("slow");
	}
});

if (window.outerWidth && window.outerWidth < 480) {

	$("#eventTrigger").click(function() {
		showSkills();
	});
}