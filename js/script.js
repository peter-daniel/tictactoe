// choose your token?


var card = ''
var turn = 1;
var player = 'player 1';
var gameEnd = 1;
var pOneScore = 0;
var pTwoScore = 0;
var tokenChoice1 = '';
var tokenColour = '';
var gameNumer

$('#chooseToken').hide();
$('#scores').hide();
$('#gameContainer').hide();
$('#startGameBut').hide();
$('#playComputer').hide();
$('#reset').hide();


var choose1 = 0;
var choose2 = 0;

$('#selection button').on('click', function() {
   if ($(this).hasClass('1')) {
      $('#selection').hide();
      $('#chooseToken').show();
      $('#sub').text('Players choose your tokens');
   } else if ($(this).hasClass('2')) {
     $('#sub').text('UNDER CONSTRUCTION...');

      $('#selection').hide();
      $('#playComputer').show();
   }
})

$('#playComputer #selectionBut').on('click', function() {
   $('#selection').show();
   $('#playComputer').hide();
})

$('#chooseToken div img').on('click', function() {
   if (choose1 === 0) {
      tokenChoice1 = (this.src);
      $(this).css({
         'opacity': '1',
         'width': '300px',
         'height': '300px'
      });
      var addDiv = $('<p>').text('Player 1').attr('id', 'choice');
      addDiv.insertAfter($(this));
      choose1++;
      $(this).off('click');
      $('#player1panel').addClass('p1').css('background-image', 'url(\"' + tokenChoice1 + '\"');

   } else if (choose1 === 1) {
      tokenChoice2 = (this.src);
      $(this).css({
         'opacity': '1',
         'width': '300px',
         'height': '300px'
      });
      var addDiv = $('<p>').text('Player 2').attr('id', 'choice');
      addDiv.insertAfter($(this));
      choose1++;
      $(this).off('click');
      setTimeout("$('#startGameBut').show()", 200);
      $('#player2panel').addClass('p2').css('background-image', 'url(\"' + tokenChoice2 + '\"');
   };
});


$('#startGameBut').on('click', function() {
   $('#startGameBut').hide();
   $('#chooseToken').hide();
   $('#scores').show();
   $('#gameContainer').show();
   $('#sub').text('Player 1\'s turn...');

})

// $('.column').addClass('blank');




$('.column').on('click', function() {
   if ($(this).text() == '') {
      if (turn % 2 !== 0) {
        $('#sub').text('Player 2\'s turn...');
         $(this).addClass('p1').css('background-image', 'url(\"' + tokenChoice1 + '\"');
         card = 'p1';
         player = 'player 1';

      } else {
        $('#sub').text('Player 1\'s turn...');
         $(this).addClass('p2').css('background-image', 'url(\"' + tokenChoice2 + '\"');
         player = 'player 2';
         card = 'p2';
      }
      $(this).text(card);
      checkResult();
      turn++;
      checkDraw();
      endTheGame();
      console.log(turn);
      console.log(player);
   }
});

function checkDraw() {
   if (turn >= 10) {
      console.log('its a draw');
      $('.column').off('click');
   }
}

function endTheGame() {
   if (gameEnd === 0) {
      $('.column').off('click');
   }
}

$('#reset').on('click', function() {
   $('.column')('p1').css('background-image', "url('../images/blank.gif')");
   var turn = 1;
   var player = 'player 1';
})

function checkResult() {
   // horizontals
   if (
      $('.1').text() === card &&
      $('.2').text() === card &&
      $('.3').text() === card) {
      $('.1, .2, .3').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
      $('#reset').show();

   } else if (
      $('.4').text() === card &&
      $('.5').text() === card &&
      $('.6').text() === card) {
      $('.4, .5, .6').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
      $('#reset').show();
   } else if (

      $('.7').text() === card &&
      $('.8').text() === card &&
      $('.9').text() === card) {
      $('.7, .8, .9').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
      $('#reset').show();
   }
   // verticals
   if (
      $('.1').text() === card &&
      $('.4').text() === card &&
      $('.7').text() === card) {
      $('.1, .4, .7').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
      $('#reset').show();
   } else if (
      $('.2').text() === card &&
      $('.5').text() === card &&
      $('.8').text() === card) {
      $('.2, .5, .8').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
      $('#reset').show();
   } else if (
      $('.3').text() === card &&
      $('.6').text() === card &&
      $('.9').text() === card) {
      $('.3, .6, .9').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
      $('#reset').show();
   }
   //diagonals
   if (
      $('.1').text() === card &&
      $('.5').text() === card &&
      $('.9').text() === card) {
      $('.1, .5, .9').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
      $('#reset').show();
   } else if (
      $('.3').text() === card &&
      $('.5').text() === card &&
      $('.7').text() === card) {
      $('.3, .5, .7').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
      $('#reset').show();
   }
}

function setScore() {
   if (player === 'player 1') {
      pOneScore++
   } else if (player === 'player 2') {
      pTwoScore++
      console.log(pOneScore);
      console.log(pTwoScore);
   }
   $('#player1score').text(pOneScore);
   $('#player2score').text(pTwoScore);
}
