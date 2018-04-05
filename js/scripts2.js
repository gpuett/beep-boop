// business logic
var binary = ["0", "1"]
function hal9000(number) {
  var beep = "Beep!";
  var boop = "Boop!";
  var dave = "I'm sorry, Dave. I'm afraid I can't do that."
  var range = [];
  var robotOutput = range;
    for (var i = 0; i <= number; i++) {
      range.push(i);
    } for (var j = 0; j < range.length; j++) {
      if (range[j] === 0 || range[j].indexOf(0) !== -1 ) {
        range[j] = beep;
      } if (range[j] === 1) {
        range[j] = boop;
      } if (range[j] % 3 === 0) {
        range[j] = dave;
      }
    }

console.log(range);
  return robotOutput;
}



// user interface logic
$(function() {
  $("#robot").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var robotSpeech = hal9000(userInput);
    $("#output").append("<li>[" + robotSpeech + "]</li>");
  });
});
