//Algo Expert

//check how many elements to the right of the current element in array is smaller than it

function rightSmallerThan(array) {
	let result = [];
  for ( let i = 0; i < array.length; i++ ) {
		let int = array[i];
		let count = 0;
		for ( let j = i+1; j < array.length; j++ ) {
			if ( int > array[j] ) count++;
		}
		result.push(count);
	}
	return result;
}