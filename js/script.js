// choose your token?


var card = ''
var turn = 0;
var player = 'player 1';
var gameEnd = 1;

$('.column').on('click', function() {
   if ($(this).text() == '') {
      if (turn % 2 !== 0) {
         $(this).addClass('x');
         card = 'x'
         player = 'player 2';
      } else {
         $(this).addClass('o');
         player = 'player 1';
        card = 'o'
      }
      $(this).text(card);
      turn++;
      checkDraw()
      checkResult()
      endTheGame()
      console.log(turn);
      console.log(player);
   }
});

function checkDraw() {
   if (turn >= 9) {
      console.log('its a draw');
      $('.column').off('click');
   }
}

function endTheGame() {
   if (gameEnd === 0) {
      $('.column').off('click');
   }
}

function resetGame() {
   $('.column').removecClass('x');
   $('.column').removecClass('x');
}

function checkResult() {
   // horizontals
   if (
      $('.1').text() === card &&
      $('.2').text() === card &&
      $('.3').text() === card) {
      $('.1, .2, .3').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
   } else if (
      $('.4').text() === card &&
      $('.5').text() === card &&
      $('.6').text() === card) {
      $('.4, .5, .6').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
   } else if (
      $('.7').text() === card &&
      $('.8').text() === card &&
      $('.9').text() === card) {
      $('.7, .8, .9').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
   }
   // verticals
   if (
      $('.1').text() === card &&
      $('.4').text() === card &&
      $('.7').text() === card) {
      $('.1, .4, .7').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
   } else if (
      $('.2').text() === card &&
      $('.5').text() === card &&
      $('.8').text() === card) {
      $('.2, .5, .8').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
   } else if (
      $('.3').text() === card &&
      $('.6').text() === card &&
      $('.9').text() === card) {
      $('.3, .6, .9').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
   }
   //diagonals
   if (
      $('.1').text() === card &&
      $('.5').text() === card &&
      $('.9').text() === card) {
      $('.1, .5, .9').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
   } else if (
      $('.3').text() === card &&
      $('.5').text() === card &&
      $('.7').text() === card) {
      $('.3, .5, .7').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
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
