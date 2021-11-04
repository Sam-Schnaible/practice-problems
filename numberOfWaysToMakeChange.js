//AlgoExpert

function numberOfWaysToMakeChange(n, denoms) {
	let numberOfWays = Array(n+1).fill(0);
	numberOfWays[0] = 1;
	for ( let denom of denoms ) {
		for ( let amount = 1; amount < numberOfWays.length; amount++ ) {
			if ( denom <= amount ) {
				numberOfWays[amount] += numberOfWays[amount - denom];
			}
		}
	}
	return numberOfWays[n];
};

