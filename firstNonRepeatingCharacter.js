// Algo Expert

function firstNonRepeatingCharacter(string) {
  const charMap = new Map();

	for ( let i = 0; i < string.length; i++ ) {
		if ( charMap.has(string[i])) {
			charMap.set(string[i], charMap.get(string[i])+1)
		} else {
			charMap.set(string[i], 1);
		}
	}
	let charIter = charMap.entries();
	let i = 0;
	while ( i < charMap.size ) {
		let currentIter = charIter.next();
		if ( currentIter.value[1] === 1) {
			return string.indexOf(currentIter.value[0]);
		}
		i++;
	}

  return -1;
}