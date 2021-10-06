/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = n => {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    return false;
  }

  const upperLimit = Math.sqrt(Math.abs(n));
  if (n === 1) {
    return false;
  }
  for (var i = 2; i <= upperLimit; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};


  /* Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive).
 */

var primeSieve = function (start, end) {

};

var range = function (start, end) {
  var result = [];
  for (var i = start; i <= end; i++) { result.push(i); }
  return result;
};
