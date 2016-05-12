// choose your token?


var card = '';
var turn = 1;
var player = '';
var gameEnd = 1;
var pOneScore = 0;
var pTwoScore = 0;
var tokenChoice1 = '';
var tokenColour = '';
var winnerGoesFirst = 10; // changes draw total
var choose1 = 0;
var choose2 = 0;
var myTimer;
var timerLength = 0;
var secondsPassed = 6;

$('#chooseToken').hide();
$('#scores').hide();
$('#gameContainer').hide();
$('#startGameBut').hide();
$('#playComputer').hide();
$('#timer').hide();






function timerTick() {
  window.clearInterval(myTimer);
   if (gameEnd = 1) {
      myTimer = window.setInterval(function() {
         console.log('Time tick');
         secondsPassed--;
         $('#timer').html('Timer: &nbsp' + secondsPassed + ' &nbsp');

         if (secondsPassed === 0) {
            if (player = 'player 1') {
               pOneScore--;
               $('#timer').html('Get it together player 1...');

            } else if (player = 'player 2'){
               pTwoScore--;
               $('#timer').html('Get it together player 1...');
            }
            window.clearInterval(myTimer);
            secondsPassed = 6;
            $('#player1score').text(pOneScore);
            $('#player2score').text(pTwoScore);
         }
      }, 1000);
   }
}



$('#selection button').on('click', function() {
   if ($(this).hasClass('a')) {
      $('#selection').hide();
      $('#chooseToken').show();
      $('#sub').text('Players choose your tokens');
   } else if ($(this).hasClass('b')) {
      $('#sub').text('UNDER CONSTRUCTION...');
      $('#selection').hide();
      $('#playComputer').show();
   }
})

$('#playComputer .selectionBut').on('click', function() {
   $('#selection').show();
   $('#playComputer').hide();
   $('#sub').text('Who do you want to play with?');
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
   $('#sub').html('Player &nbsp<span>1\'</span>s&nbsp turn');
   playGame();
   $('#timer').show();
   timerTick();

})

// $('.column').addClass('blank');



function playGame() {
  $('#timer').show();
  timerTick();
   $('.column').on('click', function() {
      if ($(this).text() == '') {
         if (turn % 2 !== 0) {
           $('#timer').show();
           timerTick();
            $('#sub').html('Player &nbsp<span>2\'s</span>&nbsp turn...');
            $(this).addClass('p1').css('background-image', 'url(\"' + tokenChoice1 + '\"');
            card = 'p1';
            player = 'player 1';
            secondsPassed = 6;
         } else {
           $('#timer').show();
           timerTick();
            $('#sub').html('Player &nbsp<span>1\'s</span>&nbsp turn...');
            $(this).addClass('p2').css('background-image', 'url(\"' + tokenChoice2 + '\"');
            card = 'p2';
            player = 'player 2';
            secondsPassed = 6;
         }
         $(this).text(card);
         checkResult();
         turn++;
         checkDraw();
         endTheGame();
         console.log(turn);
         console.log(gameEnd);
      }
   });
};


function checkDraw() {
   if (turn >= winnerGoesFirst) {
      console.log('its a draw');
      $('.column').off('click');
      $('#sub').html('It\'s a draw &nbsp-&nbsp<a id=\"reset\" href=\"#\"><strong> Play again</strong></a>');
   }
}

function endTheGame() {
   if (gameEnd === 0) {
      $('.column').off('click');
   }
}

function setScore() {
   if (player === 'player 1') {
      pOneScore++
      $('#player1panel').addClass('chosen');
      $('#player2panel').css('opacity', '.3');
      $('#sub').html('Player &nbsp<span>1</span>&nbsp is the winner&nbsp-&nbsp<a id=\"reset\" href=\"#\">Play again</a>');
   } else if (player === 'player 2') {
      pTwoScore++
      $('#player2panel').addClass('chosen');
      $('#player1panel').css('opacity', '.3');
      $('#sub').html('Player &nbsp<span>2</span>&nbsp is the winner &nbsp-&nbsp<a id=\"reset\" href=\"#\"><strong> Play again</strong></a>');
   }
   SetWinnerForNext()
   resetTheGame()
   $('#player1score').text(pOneScore);
   $('#player2score').text(pTwoScore);
   window.clearInterval(myTimer);
   $('#timer').hide();
}


function resetTheGame() {
   $('#reset').on('click', function() {
      $('.column')
         .css({
            'background-image': 'none',
            // 'opacity': '0.6'
         })
         .text('')
      if (player === 'player 1') {
         $('#sub').html('Player &nbsp<span>1</span>&nbsp goes first');
      } else {
         $('#sub').html('Player &nbsp<span>2</span>&nbsp goes first');
      }
      $('p1, .p2').removeClass('chosen');
      $('#player1panel, #player2panel').removeClass('opacity', '1');
      $('#player1panel, #player2panel').css('opacity', '1');
      card = '';
      gameEnd = 1;
      playGame();

   })
}

function SetWinnerForNext() {
   if (player === 'player 1') {
      turn = 0;
      winnerGoesFirst = 9;
   } else {
      (player === 'player 2')
      turn = 1;
      winnerGoesFirst = 10;
   }
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
      setScore();

   } else if (
      $('.4').text() === card &&
      $('.5').text() === card &&
      $('.6').text() === card) {
      $('.4, .5, .6').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
   } else if (

      $('.7').text() === card &&
      $('.8').text() === card &&
      $('.9').text() === card) {
      $('.7, .8, .9').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
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
   } else if (
      $('.2').text() === card &&
      $('.5').text() === card &&
      $('.8').text() === card) {
      $('.2, .5, .8').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
   } else if (
      $('.3').text() === card &&
      $('.6').text() === card &&
      $('.9').text() === card) {
      $('.3, .6, .9').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
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
   } else if (
      $('.3').text() === card &&
      $('.5').text() === card &&
      $('.7').text() === card) {
      $('.3, .5, .7').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
   }
}
