//AlgoExpert

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
};