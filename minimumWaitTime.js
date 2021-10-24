// AlgoExpert

function minimumWaitingTime(queries) {
	let totalWaitTime = 0;
	let tempTime = 0;
	queries.sort((a, b) => a-b);
	for ( let i = 1; i < queries.length; i++ ) {
		tempTime += queries[i -1];
		totalWaitTime += tempTime;
	}
  return totalWaitTime;
};