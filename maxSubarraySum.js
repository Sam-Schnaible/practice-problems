// given an array and an integer n, find the sub array with the largest sum who's length is n

const maxSubarraySum = (arr, n) => {
	let max = 0;
	for ( let i = 0; i <= arr.length - n; i++ ) {
		let currentSum = arr.slice(i, i+n).reduce( (sum, val) => {
			return sum+val;
		})
		max = Math.max(max, currentSum);

	}
	return max;
}