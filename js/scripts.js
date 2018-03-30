// Business Logic
var binary = ["0", "1"];
function hal9000(number) {
  var userArray = number.splt("");
  var outputString0 = "<em>Beep!</em>";
  var outputString1 = "<em>Boop!</em>";
  var outputString3 = "<em>I'm sorry, Dave. I'm afraid I can't do that.</em>";
    for (var i = 0; i < userArray.length, i++) {

    }
  // return   
}



// User-Interface Logic
$(function() {
  ("#robot").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var robotSpeech = hal9000(userInput);
    $("#output").text(robotSpeech);
  });
});
