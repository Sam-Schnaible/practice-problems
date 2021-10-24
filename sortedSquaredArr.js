//AlgoExpert

function sortedSquaredArray(array) {
  // Write your code here.
  return array.map( x => x**2).sort( (a, b) => a-b);
};