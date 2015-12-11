<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <title>Worldwide Shoutout - Pitbull</title>
    <link type="text/css" href="assets/bootstrap.min.css" rel="stylesheet">
    <link type="text/css" href="css/style.css" rel="stylesheet">
  </head>
  <body>
  <div class="bg-image">
    <div class="container header-outer">
      <div class="header-wrap">
        <img src="images/header.png" height="477" width="1578" alt="" class="img-responsive">
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4" id="form-wrapper">
          <!-- START FORM -->
          <form id="form" action="./subscribe.php" method="post">
            <div class="row">
              <div class="col-md-6">
                <div class="input-group input-group-md">
                  <span class="input-group-addon">></span>
                  <input name ="fname" id="fname" type="text" class="form-control" value="" placeholder="First Name">
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group input-group-md">
                  <span class="input-group-addon">></span>
                  <input name="lname" id="lname" type="text" class="form-control" value="" placeholder="Last Name">
                </div>            
              </div>
            </div>
            <div class="row">
             <div class="col-md-12">
                <div class="input-group input-group-md">
                  <span class="input-group-addon">@</span>
                  <input name="email" id="email" type="text" class="form-control" value="" placeholder="E-Mail Address">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-group input-group-md">
                  <span class="input-group-addon">></span>
                  <input name="zip" id="zip" type="text" class="form-control" value="" placeholder="ZIP Code">
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group input-group-md">
                  <span class="input-group-addon">></span>
                  <input name="phone" id="phone" type="text" class="form-control" value="" placeholder="Phone">
                </div>            
              </div>
            </div>
            <div class="row">
             <div class="col-md-12">
                <input type="hidden" id="link" name="link" value="" />
                <p id="ios-note">Hi there! We notice you're using an iOS device. Due to system limitations, please record a video when prompted and have the video facing a black screen for optimal upload times(video will be converted into audio recording). Sorry for the inconvinence.</p>
                <div id="recordModule"></div>
              </div>
            </div>
            <div class="row">
             <div class="col-md-12">
                <div class="input-group input-group-md">
                  <span class="input-group-addon">✓</span>
                  <input name="submit" id="submit" type="submit" class="form-control">
                </div>
              </div>
            </div>
          </form>
          <!-- END FORM -->
          <img src="images/sirius.png" alt="" class="img-responsive" id="sirius-logo">
        </div>
        <div class="col-md-4 mic-wrapper" id="eventTrigger">
          <a href="javascript:void(0)"><img src="images/mic.png" alt="" class="img-responsive "></a>
        </div>
          <div class="col-md-4 pitbull-wrapper">
            <img src="images/pitbull.png" id="pitbull-cut" alt="Pitbull Cutout">
          </div>
      </div>
    </div>
  </div>
  <div class="check-size"></div>
    <script src="assets/jquery.min.js"></script>
    <script src="assets/bootstrap.min.js"></script>
    <script src="assets/jquery.validate.min.js"></script>
    <script src="js/initiate.js"></script>
    <script src="js/validate-form.js"></script>
    <script>
        $(function(){
      $("#recordModule").load("audior.html"); 
    });
    </script> 

  </body>
</html>