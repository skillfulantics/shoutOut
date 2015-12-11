/*Custom Reusables*/
function showSkills() {
	$("#pitbull-cut, #eventTrigger").fadeTo("slow", 0);
};


/*Called Events/misc*/

if ($(".check-size").css("float") == "right") {
	$("#eventTrigger").click(function() {
		showSkills();
		$('#form-wrapper').css('z-index', '999');
	});
}


$( "#eventTrigger" ).click(function() {
	if ( $("#form").is( ":hidden" ) ) {
		$("#form").slideDown("slow");
	}
});

$(document).ready(function(){
	i = navigator.platform;
	if( i === 'iPhone' || i === 'iPad' || i === 'iPod') {
		$("#ios-note").show();
	}
});