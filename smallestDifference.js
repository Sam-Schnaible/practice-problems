//AlgoExpert

function smallestDifference(arrayOne, arrayTwo) {
  let result = [];
	let smallestDiff = Math.abs(arrayOne[0] - arrayTwo[0]);

	for ( let i = 0; i < arrayOne.length; i++ ) {
		for ( let j = 0; j < arrayTwo.length; j++ ) {
			let temp = Math.abs(arrayOne[i] - arrayTwo[j]);
			if ( temp < smallestDiff) {
				smallestDiff = temp;
				result = [arrayOne[i], arrayTwo[j]];
			}
		}
	}
	return result;
};
