// Algo Expert

function longestPeak(array) {
	let result = 0;
	let count = 0;
	for ( let i = 0; i < array.length; i++ ) {
		if ( array[i+1] > array[i] ) {
			count++;
		}
		if ( array[i+1] === array[i] ) {
			count = 0;
		}
		if ( array[i + 1] < array[i] && count >= 1) {
			while ( array[i+1] < array[i] && i < array.length - 1 ) {
				count++;
				i++;
			}
			if ( i === array.length -1 && array[array.length -1] < array[i-1] ) {
				count++;
			} else {
				count++;
			}
			result = Math.max(result, count);
			count = 0;
			i--;
		}
	}
	return result;
}