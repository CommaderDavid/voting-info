$(document).ready(function() {
  var age = parseInt(prompt("What is your current age?"));

  if (age >= 18) {
    $('#voting').show();
  } else {
    alert("Not quite old enough.")
    $('#under-18').show();
  }
});
