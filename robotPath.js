Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@Sam-Schnaible
hackreactor
/
hr-rfp54-toy-problems
Private
3
0
31
Code
Issues
Pull requests
1
Actions
Projects
Wiki
Security
Insights
hr-rfp54-toy-problems/robotPaths/robotPaths.js /
@hackreactor-bot
hackreactor-bot (solution)
Latest commit 730723c on Aug 26
 History
 1 contributor
61 lines (56 sloc)  1.62 KB

/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {

  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }
  if (!(i >= 0 && i < n && j >= 0 && j < n) ||
      board.hasBeenVisited(i, j)) {
    return 0;
  }
  if (i === n - 1 && j === n - 1) { return 1; }
  board.togglePiece(i, j);
  var result = robotPaths(n, board, i, j + 1) +
    robotPaths(n, board, i, j - 1) +
    robotPaths(n, board, i + 1, j) +
    robotPaths(n, board, i - 1, j);
  board.togglePiece(i, j);
  return result;
  };
