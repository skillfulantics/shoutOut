/*Custom Reusables*/
function showSkills() {
	$("#pitbull-cut, #eventTrigger").fadeTo("slow", 0);
};


/*Called Events/misc*/

if ($(".check-size").css("float") == "right") {
	$("#eventTrigger").click(function() {
		showSkills();
	});
}


$( "#eventTrigger" ).click(function() {
	if ( $("#form").is( ":hidden" ) ) {
		$("#form").slideDown("slow");
	}
});

// if (window.outerWidth && window.outerWidth < 960) {

// 	$("#eventTrigger").click(function() {
// 		showSkills();
// 	});
// }
