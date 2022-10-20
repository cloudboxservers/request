var BAR = new ProgressBar.Line(PRO, {
  strokeWidth: 2,
  easing: 'easeInOut',
  duration: 18000,
  color: '#0000FF',
  trailColor: '#000',
  trailWidth: 2,
  svgStyle: {width: '80%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  step: (state, BAR) => {

    var CUR = Math.round(BAR.value() * 100);

    console.log("xD " + CUR)

    var TEX = "";

    if (CUR < 8) {
      TEX = "Requesting Folder Data...";
    } else if (CUR >= 8 && CUR < 32) {
      TEX = "Receiving Folder Data...";
    } else if (CUR >= 96) {
      TEX = "Error, Our system has detected abnormal activity from your ip address.<p>We are sorry but we were unable to automatically verify your browser!</p><p>Please enter the captcha below to continue...</p>";
    }

    BAR.setText(TEX);

  }
});

function YTP() {
  $(".YTP-button").addClass("disabled").attr("disabled", "true");
  $(".S1").fadeOut(2000);
  setTimeout(function() {
    $(".S2").fadeIn(2000);
  }, 2000)
}

function CON() {

  var EMAIL = $("#YTemail").val();

  var LENG = $("#YTlength").val();

  if (EMAIL.includes("") && LENG) {
    //$("#YTlength").attr("readonly", "true");
    $(".CON-button").addClass("disabled").attr("disabled", "true");
    $(".S2").fadeOut(2000);

    setTimeout(function() {
      $(".S3").fadeIn(2000);
      BAR.animate(1);
    }, 2000)

    setTimeout(function() {
      $(".VER-button").fadeIn(2000);
    }, 20000)

  } else {
    alert("Make sure you typed your desired username and device type.")
  }

}
