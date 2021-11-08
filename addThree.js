//AlgoExpert

function threeNumberSum(array, targetSum) {
  const result = [];
	array.sort( (a,b) => a -b);
	for ( let i = 0; i < array.length -2; i++ ) {
		let left = i + 1;
		let right = array.length -1;
		while ( left < right ) {
			const currentSum = array[i] + array[left] + array[right];
			if ( currentSum === targetSum) {
				result.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if ( currentSum < targetSum ) {
				left++;
			} else if (currentSum > targetSum) {
				right--;
			}
		}
	}
	return result;
};