// AlgoExpert

// Find longest palindromic substring

function longestPalindromicSubstring(string) {
  if ( string.length === 1) return string;

  let slicedString = '';
  let longestPalindrom = '';
  for ( i = 0; i < string.length - 1; i++ ) {
    for ( j = string.length -1; j > i; j-- ) {
      if ( string[i] === string[j] ) {
        slicedString = string.slice(i, j+1);
      	if ( slicedString === reverseString(slicedString) ) {
        	slicedString.length > longestPalindrom.length ?
          longestPalindrom = slicedString : longestPalindrom;
        }
      }
    }
  }
  return longestPalindrom;
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
};
