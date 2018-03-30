// Business Logic






// User-Interface Logic
$(function() {
  ("#robot").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
  })
});
