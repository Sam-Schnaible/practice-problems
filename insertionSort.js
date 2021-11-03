//AlgoExpert

function insertionSort(array) {

	for ( let i = 1; i < array.length; i++ ) {
		let j = i - 1;
		let current = array[i];
		while ( j >= 0 ) {
			if ( current < array[j] ) {
				array[i] = array[j];
				i--;
				j--;
			} else {
				break;
			}
		}
		array[i] = current;
	}
	return array;
};