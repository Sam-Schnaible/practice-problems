/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*/

var rockPaperScissors = function (rounds) {
  // TODO: your solution here

  var rounds = rounds || 3;
  var combos = [];

  var playRounds = function (playedSoFar) {
    playedSoFar = playedSoFar || '';

    if (playedSoFar.length === rounds) {
      combos.push(playedSoFar);
      return;
    }

    ['R', 'P', 'S'].forEach(function(currentPlay) {
      playRounds(playedSoFar + currentPlay);
    });
  };

  playRounds();
  return combos;
  };