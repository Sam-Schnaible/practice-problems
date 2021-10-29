//AlgoExpert

const productSum = (array, multiplier=1) => {
	let result = 0;
	for ( const element of array) {
		if ( Array.isArray(element)) {
			result += productSum(element, multiplier+1)
		} else {
			result += element;
		}
	}
	return result* multiplier;
}