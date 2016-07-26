// choose your token?
var test = {
   item: 'this',
   thing: 'that'
}
var card = '';
var turn = 1;
var player = 'player 1';
var gameEnd = 1;
var pOneScore = 0;
var pTwoScore = 0;
var tokenChoice1 = '';
var tokenChoice2 = '';
var winnerGoesFirst = 10;
var choose1 = 0;
var choose2 = 0;
var myTimer = 0;
var secondsPassed = 4;

$('#chooseToken').hide();
$('#scores').hide();
$('#gameContainer').hide();
$('#startGameBut').hide();
$('#playComputer').hide();
$('#timer').hide();


//////////////////////////////////////////////////////
///////// SELECTION
//////////////////////////////////////////////////////


// $('#gameHolder').offsetTop('20px');


// FIRST STAGE choose whoe to play
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
   // if play computer is chosen show options
$('#playComputer .selectionBut').on('click', function() {
   $('#selection').show();
   $('#playComputer').hide();
   $('#sub').text('Who do you want to play with?');
})

// SECOND STAGE Choose the token and place it
$('#chooseToken div img').on('click', function() {
   // get player 1 token
   if (choose1 === 0) {
      // get the absolute path to the image to place as background image
      tokenChoice1 = (this.src);
      //animate the tokens and add player #
      $(this).css({
         'opacity': '1',
         'width': '200px',
         'height': '200px'
      });
      var addDiv = $('<p>').text('Player 1').attr('id', 'choice');
      addDiv.insertBefore($(this));
      choose1++;
      $(this).off('click');
      $('#player1panel').addClass('p1').css('background-image', 'url(\"' + tokenChoice1 + '\"');
      // get player 2 token
   } else if (choose1 === 1) {
      tokenChoice2 = (this.src);
      $(this).css({
         'opacity': '1',
         'width': '200px',
         'height': '200px'
      });
      var addDiv = $('<p>').text('Player 2').attr('id', 'choice');
      addDiv.insertBefore($(this));
      choose1++;
      $(this).off('click');
      $('#startGameBut').show();
      $('#player2panel').addClass('p2').css('background-image', 'url(\"' + tokenChoice2 + '\"');
   };
});

// hide selection divs and show game
$('#startGameBut').on('click', function() {
   $('#startGameBut').hide();
   $('#chooseToken').hide();
   $('#scores').show();
   $('#gameContainer').show();
   $('#sub').html('Player &nbsp<span>1\'s</span>&nbsp turn');
   playGame();
   $('#timer').show();


})

//////////////////////////////////////////////////////
///////// PLAY GAME
//////////////////////////////////////////////////////

function playGame() {

   $('.column').on('click', function() {

      // check if column has been clicked
      if ($(this).text() == '') {
         // take alternate turns
         if (turn % 2 !== 0) {
            $('#sub').html('Player &nbsp<span>2\'s</span>&nbsp turn...');
            // place token choice to column
            $(this).addClass('p1').css('background-image', 'url(\"' + tokenChoice1 + '\"');
            player = 'player 1';
            card = 'p1';

         } else {

            $('#sub').html('Player &nbsp<span>1\'s</span>&nbsp turn...');
            $(this).addClass('p2').css('background-image', 'url(\"' + tokenChoice2 + '\"');
            player = 'player 2';
            card = 'p2';

         }

         // add allocated 'card' type as text to that dom element to test results
         $(this).text(card);
         turn++;
         console.log('turn ' + turn);

         checkDraw();
         checkResult();
         checkEndGame();
      }
   });
};


// function timerTick() {
//    window.clearInterval(myTimer);
//    if (gameEnd === 1) {
//       myTimer = window.setInterval(function() {
//          secondsPassed--;
//          $('#timer').html('Timer: &nbsp' + secondsPassed + ' &nbsp');
//          if (secondsPassed === 0) {
//             // display message and deduct 1 point if timed out
//             if (player === 'player 1') {
//                pOneScore--;
//                $('#timer').html('Get it together player 1...');
//                console.log(player);
//                window.clearInterval(myTimer);
//
//             } else if (player === 'player 2') {
//                pTwoScore--;
//                $('#timer').html('Get it together player 2...');
//                player = 'player 1';
//                console.log(player);
//                window.clearInterval(myTimer);
//             }
//             secondsPassed = 4;
//             $('#player1score').text(pOneScore);
//             $('#player2score').text(pTwoScore);
//          }
//       }, 1000);
//    }
// }

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
      $('#sub').html('Player &nbsp<span>2</span>&nbsp is the winner&nbsp-&nbsp<a id=\"reset\" href=\"#\">Play again</a>');
   }
   $('#player1score').text(pOneScore);
   $('#player2score').text(pTwoScore);
   window.clearInterval(myTimer);
   resetTheGame();
}


function resetTheGame() {
   $('#reset').on('click', function() {
      $('.column')
         .removeClass('chosen')
         .css({
            'background-image': 'none',
            // 'opacity': '0.6'
         })
         .text('')
      if (player === 'player 1') {
         $('#sub').html('Player &nbsp<span>1</span>&nbsp goes first');
         turn = 1;
         winnerGoesFirst = 10;
      } else {
         turn = 0
         winnerGoesFirst = 9;
         $('#sub').html('Player &nbsp<span>2</span>&nbsp goes first');
      }
      $('p1, .p2').removeClass('chosen');
      $('#player1panel, #player2panel').removeClass('opacity', '1');
      $('#player1panel, #player2panel').css('opacity', '1');

      playGame();

      card = '';
      gameEnd = 1;


   })
}

// function setWinnerForNext() {
//    if (player === 'player 1') {
//       turn = 1;
//       winnerGoesFirst = 10;
//       $('#sub').html('Player &nbsp<span>1\'s</span>&nbsp turn...');
//    } else {
//       (player === 'player 2')
//       turn = 0;
//       winnerGoesFirst = 9;
//       $('#sub').html('Player &nbsp<span>2\'s</span>&nbsp turn...');
//    }
//    console.log('turn ' + turn);
// }


//////////////////////////////////////////////////////
///////// checks
//////////////////////////////////////////////////////


function checkDraw() {
   // 10 so that player 1 goes first
   if (turn >= winnerGoesFirst) {
      console.log('its a draw');
      $('.column').off('click');
      $('#sub').html('It\'s a draw &nbsp-&nbsp<a id=\"reset\" href=\"#\"><strong> Play again</strong></a>');
      $('#timer').hide();
      resetTheGame();
   }
}

function checkEndGame() {
   if (gameEnd === 0) {
      // setWinnerForNext();
      $('.column').off('click');
      console.log('endgame ' + gameEnd);
   }
}


function checkResult() {
   // horizontals
   if ($('.1').text() === card && $('.2').text() === card && $('.3').text() === card) {
      $('.1, .2, .3').addClass('chosen');
      setScore();
      gameEnd = 0;
      console.log('the winner is ' + player);

   } else if ($('.4').text() === card && $('.5').text() === card && $('.6').text() === card) {
      $('.4, .5, .6').addClass('chosen');
      gameEnd = 0;
      console.log('the winner is ' + player);
      setScore();
   } else if ($('.7').text() === card && $('.8').text() === card && $('.9').text() === card) {
      $('.7, .8, .9').addClass('chosen');
      setScore();
      gameEnd = 0;
      console.log('the winner is ' + player);

   }
   // verticals
   else if ($('.1').text() === card && $('.4').text() === card && $('.7').text() === card) {
      $('.1, .4, .7').addClass('chosen');
      setScore();
      gameEnd = 0;
      console.log('the winner is ' + player);

   } else if ($('.2').text() === card && $('.5').text() === card && $('.8').text() === card) {
      $('.2, .5, .8').addClass('chosen');
      setScore();
      gameEnd = 0;
      console.log('the winner is ' + player);

   } else if ($('.3').text() === card && $('.6').text() === card && $('.9').text() === card) {
      $('.3, .6, .9').addClass('chosen');
      setScore();
      gameEnd = 0;
      console.log('the winner is ' + player);

   }
   //diagonals
   else if ($('.1').text() === card && $('.5').text() === card && $('.9').text() === card) {
      $('.1, .5, .9').addClass('chosen');
      setScore();
      gameEnd = 0;
      console.log('the winner is ' + player);

   } else if ($('.3').text() === card && $('.5').text() === card && $('.7').text() === card) {
      $('.3, .5, .7').addClass('chosen');
      setScore();
      gameEnd = 0;
      console.log('the winner is ' + player);

   }
}
