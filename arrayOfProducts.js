// Algo Expert

function arrayOfProducts(array, i=0, result=[]) {

  if ( i === array.length ) return result;
	let product = 1;
	for ( let j = 0; j < array.length; j++ ) {
		if ( j === i ) continue;
		product *= array[j];
	}
	result.push(product)
	return arrayOfProducts(array, i+=1, result)
}