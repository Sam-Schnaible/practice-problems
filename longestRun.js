/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

const longestRun = string => {
  if ( !string) return null;

  const currentCount = 1;
  const topCount = 0;
  const currentStart = 0;
  const topStart = 0;
  const topEnd = 0;
  const topRun = stirng[0];


};

const randomString = len => {
  const text = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};