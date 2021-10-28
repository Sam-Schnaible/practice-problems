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
hr-rfp54-toy-problems/islandCount/islandCount.js /
@hackreactor-bot
hackreactor-bot (solution)
Latest commit 0600c05 on Aug 27
 History
 1 contributor
48 lines (45 sloc)  1.08 KB

/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  // Your code here.

  var islands = 0;
  var mapArr = mapStr.split('\n').map(function(row) {
    return row.split('');
  })

  function deleteIsland(x, y) {
    mapArr[y][x] = '.';
    if(y > 0) {
      if (mapArr[y-1][x] === '0') {
        deleteIsland(x, y-1);
      }
    }
    if(y < mapArr.length-1) {
      if (mapArr[y+1][x] === '0') {
        deleteIsland(x, y+1);
      }
    }
    if(x > 0) {
      if (mapArr[y][x-1] === '0') {
        deleteIsland(x-1, y);
      }
    }
    if (x < mapArr[y].length) {
      if (mapArr[y][x+1] === '0') {
        deleteIsland(x+1, y);
      }
    }
  }
  for (var y = 0; y < mapArr.length; y++) {
    for (var x = 0; x < mapArr[y].length; x++) {
      if (mapArr[y][x] === '0') {
        islands++;
        deleteIsland(x, y);
      }
    }
  }
  return islands;
  }
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete