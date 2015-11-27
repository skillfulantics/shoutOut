$( "#eventTrigger" ).click(function() {
	if ( $("#form").is( ":hidden" ) ) {
		$("#form").slideDown("slow");
	}
});