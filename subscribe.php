<?php
	require_once './assets/MCAPI.class.php';
	$api = new MCAPI('530bc371b027a2f35d75a72f70d302e9-us12');
	$merge_vars = array('FNAME'=>$_POST["fname"], 'LNAME'=>$_POST["lname"], 'PHONE'=>$_POST["phone"], 'ZIP'=>$_POST["zip"], 'FILE'=>$_POST["link"]);

	// Submit subscriber data to MailChimp
	// For parameters doc, refer to: http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php
	$retval = $api->listSubscribe( 'ee01d482e3', $_POST["email"], $merge_vars, 'html', false, true );

	if ($api->errorCode){
		echo "<h2>Please record an audio shoutout.</h2>";
	} else {
		header("Location: ./thankyou.php");
	}
?>
