// given an array find the contiguous subarray with the largest sum

const maxSum = array => {
	let start, end = 0;
	let maxSum = -Infinity;
	let currentSum = 0;
	for (let i = 0; i < array.length -1; i++ ) {
		currentSum = Math.max(array[i], array[i] + currentSum);
		maxSum = Math.mamax(maxSum, currentSum);
	}
	return maxSum;
}