//AlgoExpert

function tournamentWinner(competitions, results) {
  //create obj to hold team names as keys witih number of wins for value
	let obj = {};

	for ( let i = 0; i < results.length; i++ ) {
		let win = results[i] === 0 ? 1 : 0;
		if ( !obj[competitions[i][win]] ) {
			obj[competitions[i][win]] = 1;
		} else {
			obj[competitions[i][win]]++;
		}
	}
	let winner = 0;
	let result;
	for ( let key in obj ) {
		if ( winner < obj[key] ) {
			winner = obj[key];
			result = key;
		}
	}
  return result;
}