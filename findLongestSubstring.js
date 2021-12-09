// given a string, find the longest substring with all distinct characters

function findLongestSubstring(str){
  if ( !str.length ) return 0;
  let i = 0;
  let max = 0;
  let count = 0;
  let obj = {};

  while ( i < str.length) {
    if ( !obj[str[i]] && obj[str[i]] !== 0) {
       obj[str[i]] = i;
       count++;
       i++;
    } else {
        i = obj[str[i]] +1;
        obj = {};
        count = 0;
    }
    max = Math.max(max, count);
  }
    return max;
}