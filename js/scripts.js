// Business Logic
var binary = ["0", "1"];
function hal9000(number) {
  var userArray = number.split("");
  var outputString0 = "Beep!";
  var outputString1 = "Boop!";
  var outputString2 = "I'm sorry, "
  var outputString3 =". I'm afraid I can't do that.";
  var name = $("#name").val();
  var robotOutput = "";
  var range = [];
    for (var i = 0; i < userArray.length; i++) {
      if (number % 3 === 0 && number > 0) {
        robotOutput = outputString2 + name + outputString3
      } else if (userArray[i] === binary[1]) {
        robotOutput = outputString1
        break
      } else if (userArray[i] === binary[0]) {
        robotOutput = outputString0
      } else {
        for (var j = 0; j <= number; j++) {
          range.push(j);
          robotOutput = range
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
});
