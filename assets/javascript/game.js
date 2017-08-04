/*

  function to assign random values to each jewel
  onClick functions to increase value of counter && display updated userScore


*/
$(document).ready(function() {

  var counter = 0;
  var wins = 0;
  var losses = 0;
  var computerNumber = chooseNumber();

  function chooseNumber() {
    return Math.floor(Math.random() * 120 ) + 1;
  }

  function resetCounter(){
    counter = 0;
    $('.userScore').text(counter);
  }


  $('#random-score').text(computerNumber);


  $('.btn-1').on("click", function() {
    counter += 5;
    $('.userScore').text(counter);
    checkScore();
  });


  $('.btn-2').on("click", function() {
    counter += 3;
    $('.userScore').text(counter);
    checkScore();
  });


  $('.btn-3').on("click", function() {
    counter += 8;
    $('.userScore').text(counter);
    checkScore();
    });


  $('.btn-4').on("click", function() {
    counter += 12;
    $('.userScore').text(counter);
    checkScore();
  });

function checkScore(){
  if(counter === computerNumber){
    wins++;
    alert("You won! Keep going!");
    $('#wins').text(wins);
    resetCounter();
    computerNumber = chooseNumber();
    $('#random-score').text(computerNumber);
  }
    else if(counter > computerNumber){
    losses++;
    alert("You lost. Try again?");
    $('#losses').text(losses);
    resetCounter();
    computerNumber = chooseNumber();
    $('#random-score').text(computerNumber);
  }
}


});
