// Business Logic
var binary = ["0", "1"];
function hal9000(number) {
  var userArray = number.split("");
  console.log(userArray);
  var beep = "Beep!";
  var boop = "Boop!";
  var dave = "I'm sorry, Dave. I'm afraid I can't do that."
  var robotOutput = "";
  var range;
    for (var i = 0; i < userArray.length; i++) {
      if (userArray[i] === binary[0]) {
        robotOutput =
        // $("body").css("background-color", "red");
        // $(".jumbotron").css("background-image", "url(img/hal.jpg)");
        // $("#twirl").show();
        // $("#vortex").hide();
        // $("#beep").hide();
      // }
      // else if (userArray[i] === binary[1]) {
      //   robotOutput = outputString1
        // $("body").css("background-color", "black");
        // $(".jumbotron").css("background-image", "url(img/hal1.jpg)");
        // $("#beep").show();
        // $("#vortex").hide();
        // $("#twirl").hide();

      // }
      // else if (userArray[i] === binary[0]) {
      //   robotOutput = outputString0
        // $("body").css("background-color", "black");
        // $(".jumbotron").css("background-image", "url(img/hal1.jpg)");
        // $("#beep").show();
        // $("#vortex").hide();
        // $("#twirl").hide();
      // }
      // else {
      //   for (var j = 0; j <= number; j++) {
      //     range.push(j);
      //     robotOutput = range
          // $("body").css("background-color", "black");
          // $(".jumbotron").css("background-image", "url(img/hal1.jpg)");
          // $("#vortex").show();
          // $("#twirl").hide();
          // $("#beep").hide();
        }
      }
    }
  return robotOutput
}

// User-Interface Logic
$(function() {
  $("#robot").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var robotSpeech = hal9000(userInput);
    $("#output").append("<li>" + robotSpeech + "</li>");
  });
  $("#reverse").click(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var robotSpeech = hal9000(userInput);
    var reverseSpeech = robotSpeech.reverse();
    $("#output").append("<li>" + reverseSpeech + "</li>");
    $("body").css("background-color", "red");
  });
});
