/*Custom Reusables*/
function showSkills() {
	i = navigator.platform;
	$("#pitbull-cut, #eventTrigger").fadeTo("slow", 0);
	if( i === 'iPad' && $(window).width() <= 768) {
			$("#sirius-logo").animate({ marginLeft: '20%' }, 1000);
			$(".custom-file-input").css('margin-left', '7px');
		} else if ( i === 'iPhone' || i === 'iPod' || i === 'Android' || i === 'Linux armv7l' && $(window).width() <= 480) {
			$("#sirius-logo").animate({ marginLeft: '11%' }, 1000);
			$(".custom-file-input").css('margin-left', '7px');
		}
};


/*Called Events/misc*/

if ($(".check-size").css("float") == "right") {
	$("#eventTrigger").click(function() {
		showSkills();
		$('#form-wrapper').css('z-index', '999');
	});
}


$( "#eventTrigger" ).click(function() {
	$(this).fadeTo("slow", 0);
	if ( $("#form").is( ":hidden" ) ) {
		$("#form").slideDown("slow");
	}
});

$(document).ready(function(){
	i = navigator.platform;
	if( i === 'iPhone' || i === 'iPod') {
		$("#ios-note").show();
	}
});

/*Form Control*/

// $(function() {
//   $('#zipphonerow').on('keydown', '#zip', function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
// })

// $(function() {
//   $('#zipphonerow').on('keydown', '#phone', function(e){-1!==$.inArray(e.keyCode,[189,46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
// })