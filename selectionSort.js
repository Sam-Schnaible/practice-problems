//AlgoExpert

const swap = (i, j, array) => {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

function selectionSort(array) {
   for ( let i = 0; i < array.length -1; i++ ) {
      let min = i;
      for ( var j = i + 1; j < array.length; j++)
        if ( array[j] < array[min] ) {
        	min = j
        }
      if ( array[min] !== array[i] ) swap(i, min, array);
    }
    return array;
};