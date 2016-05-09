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

var boardArr = [1, 1, 1]
   [1, 1, 1]
   [1, 1, 1];


$('.column').on('click', function() {
   if (!$(this).hasClass('x') && !$(this).hasClass('o')) {
      if (turn % 2 !== 0) {
         $(this).addClass('x');
         player = 'player2';
      } else {
         $(this).addClass('o');
         player = 'player1';
      }
      turn++;
      checkDraw()
      checkResult()
      console.log(turn);
      console.log(player);
   } else {
   console.log('this space is taken');
 }
});

function checkDraw() {
   if (turn >= 9) {
      console.log('its a draw');
      $('.column').off('click');
   }
}

function checkResult() {

   // horizontals
   if (
      $('#ga .1 .1').hasClass('x') &&
      $('#ga .1 .2').hasClass('x') &&
      $('#ga .1 .3').hasClass('x')) {
      console.log('x wins');
   } else if (
      $('#ga .1 .1').hasClass('o') &&
      $('#ga .1 .2').hasClass('o') &&
      $('#ga .1 .3').hasClass('o')) {
      console.log('O wins');
   }
   if (
      $('#ga .2 .1').hasClass('x') &&
      $('#ga .2 .2').hasClass('x') &&
      $('#ga .2 .3').hasClass('x')) {
      console.log('x wins');
   } else if (
      $('#ga .2 .1').hasClass('o') &&
      $('#ga .2 .2').hasClass('o') &&
      $('#ga .2 .3').hasClass('o')) {
      console.log('O wins');
   }
   if (
      $('#ga .3 .1').hasClass('x') &&
      $('#ga .3 .2').hasClass('x') &&
      $('#ga .3 .3').hasClass('x')) {
      console.log('x wins');
   } else if (
      $('#ga .3 .1').hasClass('o') &&
      $('#ga .3 .2').hasClass('o') &&
      $('#ga .3 .3').hasClass('o')) {
      console.log('O wins');
   }
   //verticals
   if (
      $('#ga .1 .1').hasClass('x') &&
      $('#ga .2 .1').hasClass('x') &&
      $('#ga .3 .1').hasClass('x')) {
      console.log('x wins');
   } else if (
      $('#ga .1 .1').hasClass('o') &&
      $('#ga .2 .1').hasClass('o') &&
      $('#ga .3 .1').hasClass('o')) {
      console.log('O wins');
   }
   if (
      $('#ga .1 .2').hasClass('x') &&
      $('#ga .2 .2').hasClass('x') &&
      $('#ga .3 .2').hasClass('x')) {
      console.log('x wins');
   } else if (
      $('#ga .1 .2').hasClass('o') &&
      $('#ga .2 .2').hasClass('o') &&
      $('#ga .3 .2').hasClass('o')) {
      console.log('O wins');
   }
   if (
      $('#ga .1 .3').hasClass('x') &&
      $('#ga .2 .3').hasClass('x') &&
      $('#ga .3 .3').hasClass('x')) {
      console.log('x wins');
   } else if (
      $('#ga .1 .3').hasClass('o') &&
      $('#ga .2 .3').hasClass('o') &&
      $('#ga .3 .3').hasClass('o')) {
      console.log('O wins');
   }
   // diagonals
   if (
      $('#ga .1 .1').hasClass('x') &&
      $('#ga .2 .2').hasClass('x') &&
      $('#ga .3 .3').hasClass('x')) {
      console.log('x wins');
   } else if (
      $('#ga .1 .1').hasClass('o') &&
      $('#ga .2 .2').hasClass('o') &&
      $('#ga .3 .3').hasClass('o')) {
      console.log('O wins');
   }
   if (
      $('#ga .3 .1').hasClass('x') &&
      $('#ga .2 .2').hasClass('x') &&
      $('#ga .3 .1').hasClass('x')) {
      console.log('x wins');
   } else if (
      $('#ga .3 .1').hasClass('o') &&
      $('#ga .2 .2').hasClass('o') &&
      $('#ga .3 .1').hasClass('o')) {
      console.log('O wins');
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
