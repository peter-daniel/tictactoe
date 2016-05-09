


// choose your token?

// determine which player move it is - player TURN

// determine the combination of what is a win for both players

// use addClass to place

// if X is placed use .find and .hasClass to log position to test

// use set value and get value to determine outcome?





var turn = 0;
var player = 'player1';
console.log(turn);
console.log(player);



$('.column').on('click', function() {
   if (turn % 2 !== 0) {
      $(this).addClass('x');
      player = 'player2';
   } else {
      $(this).addClass('o');
      player = 'player1';


   }
   turn++;
   console.log(turn);
   console.log(player);
});

function checkResult(){
  if($( "#gameArea .1 .1" ).hasClass( "x" )){

  }
}










// var randomRow = Math.round(Math.random()*5);
// var randomColumn = Math.round(Math.random()*5);
//
// console.log(randomRow);
//
// console.log($('#board div:eq(1)'));
//
//   $('#board .4 .2').append('<img src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Military-Battleship-icon.png" alt="">');
