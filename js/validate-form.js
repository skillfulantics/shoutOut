$(document).ready(function() {
	// jQuery Validation
	$("#form").validate({
		// if valid, post data via AJAX
		submitHandler: function(form) {
			$.post("../assets/subscribe.php", { fname: $("#fname").val(), lname: $("#lname").val(), email: $("#email").val(), zip: $("#zip").val(), phone: $("#phone").val(), function(data) {
				$('#response').html(data);
			});
		},
		// all fields are required
		rules: {
			fname: {
				required: true
			},
			lname: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			zip: {
				required: true
			},
			phone: {
				required: true,
				phoneUS: true
			}
		}
	});
});