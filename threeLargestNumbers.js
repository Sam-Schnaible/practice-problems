//AlgoExpert

const swap = (i, j, array) => {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

function findThreeLargestNumbers(array) {
  let k = 0;
  while (k < array.length ) {
  	let j = 0
  	for ( let i = 1; i < array.length; i++ ) {
  		if ( array[j] > array[i] ) {
  			swap(i, j, array);
  			j = i;
  		} else {
  			j = i;
  		}
  	}
  	k++;
  }
  return array.slice(-3);
};