// choose your token?


var card = '';
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
   $('#sub').text('Player 1\'s turn...');
   playGame();

})

// $('.column').addClass('blank');



function playGame() {
   $('.column').on('click', function() {
      if ($(this).text() == '') {
         if (turn % 2 !== 0) {
            $('#sub').text('Player 2\'s turn...');
            // var token1 = $('<img>').attr('src', 'tokenChoice1')
            // $(this).append(token1);
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
         console.log(card);
      }
   });
};


function checkDraw() {
   if (turn >= 10) {
      console.log('its a draw');
      $('.column').off('click');
      $('#sub').html('it\'s a draw' + ' - ' + '<a id=\"reset\" href=\"#\"><strong> Play again</strong></a>');
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
      $('.p2').css('opacity', '.3');
      $('#sub').html('Player 1 is the winner' + ' - ' + '<a id=\"reset\" href=\"#\"><strong> Play again</strong></a>');
   } else if (player === 'player 2') {
      pTwoScore++
      $('.p2').css('opacity', '.3');
      $('#sub').html('Player 1 is the winner' + ' - ' + '<a id=\"reset\" href=\"#\"><strong> Play again</strong></a>');
   }
   restClickFunction()
   $('#player1score').text(pOneScore);
   $('#player2score').text(pTwoScore);
}

function restClickFunction() {
   $('#reset').on('click', function() {
      console.log('reset it');
      $('.column').css('background-image', 'none');
      $('.column').text('')
      $('.column').removeClass('chosen')
      $('.p1, .p2').css('opacity', '1');
      card = '';
      turn = 1;
      player = 'player 1';
      gameEnd = 1;
      playGame();
   })
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
