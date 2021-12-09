// given an array and a target value, find the minimal length of a contiguous subarray who's sum is equal to or greater than the target value

function minSubArrayLen(array, num) {

  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Infinity;

  while ( start !== array.length ) {
      if ( sum < num ) {
          sum += array[end];
      }
    if ( sum >= num ) {
         minLength = Math.min(minLength, end - start + 1);
        sum -= array[start];
        start++;
    }
    if (sum < num && end === array.length - 1) {
        break;
    }
    if ( sum < num ) {
        end++;
    }
  }
    return minLength === Infinity ? 0 : minLength;
}