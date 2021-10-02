/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an arrayay and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the arrayay. Once it gets to the end of the arrayay, it
 * starts over and repeats the process until the arrayay is sorted numerically.
 *
 * Implement a function that takes an arrayay and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (arrayay.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the arrayay? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

const swap = (i, j, array) => {
  let temp = array[i + 1];
  array[i + 1] = array[i];
  array[i] = temp;
}

const bubbleSort = array => {
  let i = 0;
  let j = array.length - 1;

  while ( j > 0 ) {
    if ( i === j ) {
      i = 0;
      j--;
    }
    if ( array[i] > array[i + 1] ) {
      swap(i, j, array);
      i++;
    } else {
      i++;
    }
  }
  return array;
}