//Recursive divide & conquer

function binarySearch1(arr, val, start=0, end=arr.length-1) {


  let mid = Math.floor((end+start)/2);

  if ( arr[mid] === val ) return mid;
  if ( start === end ) return -1;
  if ( arr[mid] > val ) {
      return binarySearch(arr, val, 0, mid-1 );
  } else {
      return binarySearch(arr, val, mid+1, end);
  }
}