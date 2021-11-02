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
hr-rfp54-toy-problems/rotateMatrix/rotateMatrix.js /
@phillipalexander
phillipalexander (solution)
Latest commit e530b01 on Aug 24
 History
 1 contributor
65 lines (63 sloc)  1.91 KB

/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8

 */

var rotateMatrix = function(matrix, direction ) {

  direction = direction || 1;
  var m = matrix.length;
  var n = (matrix[0] && matrix[0].length);
  var output = [];
  for (var i = 0; i < n; i++) {
    output[i] = [];
    for (var j = 0; j < m; j++) {
      if (direction > 0) {
        output[i][j] = matrix[m - j - 1][i];
      } else if (direction < 0) {
        output[i][j] = matrix[j][n - i - 1];
      }
    }
  }
  return output;
  };
