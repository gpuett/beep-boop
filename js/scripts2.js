// business logic
function hal9000(number) {
  var beep = "Beep!";
  var boop = "Boop!";
  var dave = "I'm sorry, Dave. I'm afraid I can't do that."
  var userArray = [];
    for (var i = 0; i <= number; i++) {
      var userString = i.toString().split("");
      if (i % 3 === 0 && i > 0) {
        userArray.push(dave);
      } else if (userString.includes("1")) {
        userArray.push(boop);
      } else if (userString.includes("0")) {
        userArray.push(beep)
      } else {
        userArray.push(i)
      }
    }
console.log(userArray);
  return userArray;
}



// user interface logic
$(function() {
  $("#robot").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var robotSpeech = hal9000(userInput);
    $("#output").append("<li>[" + robotSpeech + "]</li>");
  });
  $("#reverse").click(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var robotSpeech = hal9000(userInput);
    var reverseSpeech = robotSpeech.reverse();
    $("#output").append("<li>[" + reverseSpeech + "]</li>");
  });
});
