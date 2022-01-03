//AlgoExpert

function runLengthEncoding(string) {
	let result = '';
	let count = 0;
	for ( let i = 0; i < string.length; i++ ) {
		count++;
		if ( i === string.length -1 ) {
			result += count + string[i];
			return result;
		}
		if ( count === 9 || string[i] !== string[i+1]) {
			result += (count + string[i]);
			count = 0;
		}
	}
	return result;
}