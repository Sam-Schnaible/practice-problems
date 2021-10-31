//AlgoExper

function binarySearch(array, target) {
  var mid = Math.floor(array.length/2);
	var high = array.length - 1;
	var low = 0;
	var findTarget = (low, mid, high) => {
    if ( array[mid] === target ) return mid;
    if ( low > high ) return -1;
    if ( target > array[mid] ) {
      low = mid + 1;
      mid = Math.floor((low + high) /2);
    } else {
      high = mid - 1;
      mid = Math.floor((high - low)/2);
    }
  return findTarget(low, mid, high);
	}
	return findTarget(low, mid, high);
};