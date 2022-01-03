// AlgoExpert

function generateDocument(characters, document) {

  const charMap = characters.split('').reduce( (obj, key) => {
	obj[key] ? obj[key]++ : obj[key] = 1;
	return obj;
	}, {});

	for ( let character of document ) {
		if (!(character in charMap) || charMap[character] === 0 ) return false;
		charMap[character]--;
	}

  return true;
};
