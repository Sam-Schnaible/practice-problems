//AlgoExpert

function isMonotonic(array) {
  let isInc = true;
	let isDec = true;
	if ( array.length <= 1 ) return true;
	// first check if non-decreasing
	for ( let i = 0; i < array.length -1; i++ ) {
		if ( array[i] > array[i + 1] ) {
			isDec = false;
			break;
		}
	}
	for ( let i = 0; i < array.length -1; i++ ) {
		if ( array[i] < array[i + 1]) {
			isInc = false;
			break;
		}
	}
	return isDec || isInc;
};