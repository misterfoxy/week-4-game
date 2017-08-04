$(document).ready(function() {
  //initialize global variables
  var crystals = ['assets/images/redCrystal.png','assets/images/blueCrystal.png','assets/images/yellowCrystal.png','assets/images/greenCrystal.png'];
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var computerNumber;

  //start game
  makeCrystals();
  startGame();

  //function to choose random number for computer
  function chooseNumber() {
    return Math.floor(Math.random() * 120 ) + 12;
  }

  //function to reset user score
  function resetCounter(){
    counter = 0;
    $('.userScore').text(counter);
  }

  //function to generate crystals and random values
  function makeCrystals() {
    //initialize empty array to store values
    var numbers = [];

    //loop to store values
    while (numbers.length<4){

      //creates random value between 1-12
      var randomNumber = Math.ceil(Math.random() * 12);
      //boolean to check if loop should continue
      var found = false;

      //loop to iterate through randomNumber array and check value
      for (var i = 0; i < numbers.length; i++){
        if(numbers[i] === randomNumber){
          found = true;
          break;
        }
      }
      //assigns random value to numbers array and continues until 4 values are present
      if(!found)numbers[numbers.length]=randomNumber;
    }
    //logs array of random numbers to console AKA CHEAT CODES
    console.log(numbers);

    //loop to create row of crystals
    for(var i = 0; i<numbers.length; i++){
      var imageCrystal = $('<img>');
      //assigns value from random number array to crystal as an attribute
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', crystals[i]);
      imageCrystal.attr('alt', 'crystals');
      //adds class to image crystal to make them clickable
      imageCrystal.addClass('crystalImage');
      //'pushes' the crystals to the jewel-row div for easy alignment
      $('.jewel-row').append(imageCrystal);
    }
  }

  function startGame() {

    resetCounter();

    //chooses random number for computer and updates DOM
    computerNumber = chooseNumber();
    $('#random-score').text(computerNumber);

    //click event for each crystal...
    $('.crystalImage').on("click", function() {

  

      //pulls string containing crystal number value and converts value into integer
      counter += parseInt($(this).data('num'));
      $('.userScore').text(counter);


      //win condition
      if(counter === computerNumber) {
        alert("You won! Keep going!");
        //update wins column
        wins++;
        $('#wins').text(wins);
        //reset game
        $('.jewel-row').empty();
        makeCrystals();
        startGame();
      }
      //loss condition
      else if(counter > computerNumber) {
         alert("You lost. Try again?");
         //updates losses column
         losses++;
         $('#losses').text(losses);
         //reset game
         $('.jewel-row').empty();
         makeCrystals();
         startGame();
      }
    });
  }
});
