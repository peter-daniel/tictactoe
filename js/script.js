// choose your token?


var card = ''
var turn = 0;
var player = 'player 1';
var gameEnd = 1;
var player1Score, player2Score;
var tokenChoice = '';
var tokenColour = '';


$('#scores').hide();
$('#container').hide();
$('#startGameBut').hide();


var choose1 = 0;
var choose2 = 0;

$('#chooseToken div img').on('click', function() {
   if (choose1 === 0) {
      tokenChoice = (this.src);
      console.log(this.src);
      // $('#vs .p1 div').append('<img src=\"' + tokenChoice + '\">');
      $(this).css({
         'opacity': '1',
         'width': '200px',
         'height': '200px'
      });
      var addDiv = $('<p>').text('Player 1').attr('id', 'choice');
      addDiv.insertAfter($(this));
      choose1++;
      $(this).off('click');

   } else if (choose1 === 1) {
      tokenChoice = (this.src);
      console.log(this.src);
      // $('#vs .p1 div').append('<img src=\"' + tokenChoice + '\">');
      $(this).css({
         'opacity': '1',
         'width': '200px',
         'height': '200px'
      });
      var addDiv = $('<p>').text('Player 2').attr('id', 'choice');
      addDiv.insertAfter($(this));
      choose1++;
      $(this).off('click');
      setTimeout("$('#startGameBut').show()",200);
   }

})



// $('.column').addClass('blank');

$('.column').on('click', function() {
   if ($(this).text() == '') {
      if (turn % 2 !== 0) {
         $(this).addClass('x');
         $('.x').css('background-image', tokenChoice)
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
