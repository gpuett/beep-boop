// Business Logic
var binary = ["0", "1"];
function hal9000(number) {
  var userArray = number.split("");
  var outputString0 = "Beep!";
  var outputString1 = "<em>Boop!</em>";
  var outputString3 = "<em>I'm sorry, Dave. I'm afraid I can't do that.</em>";
  var robotOutput = "";
    for (var i = 0; i < userArray.length; i++) {
      if (userArray[i] === binary[0]) {
        robotOutput = outputString0
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
});
