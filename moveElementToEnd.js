//AlgoExpert

function moveElementToEnd(array, toMove) {
  let endPoint = array[array.length -1];
	let tempArr = [];
	for ( let i = 0; i < array.length; i++ ) {

		if ( array[i] === toMove ) {
			tempArr.push(array.splice(i, 1)[0]);
			i--;
		}
	}
	return array.concat(tempArr);
};