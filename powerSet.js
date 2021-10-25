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
hr-rfp54-toy-problems/powerSet/powerSet.js /
@phillipalexander
phillipalexander (solution)
Latest commit 1f47514 on Jul 9
 History
 1 contributor
57 lines (49 sloc)  1.43 KB

/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {

  var set = [];
  var hash = {};
  if (!str) { str = ''; }
  str = str.split('').sort();

  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      str.splice(i, 1);
      i--;
    }
  }

  var recurse = function(strSet) {
    var joined = strSet.join('');

    if (hash[joined]) { return; }
    hash[joined] = true;
    set.push(joined);

    if (strSet.length === 1) { return; }

    for (var i = 0; i < strSet.length; i++) {
      var subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
      recurse(subSet);
    }
  };
  recurse(str);
  set.push('');

  return set;
  };