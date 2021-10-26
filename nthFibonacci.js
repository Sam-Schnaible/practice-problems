//AlgoExpert
//find the nth Fibonacci number

function getNthFib(n) {
	if ( n === 1 ) return 0;
	if ( n === 2 || n === 3) return 1;
  let prev1 = 1;
	let prev2 = 1;
	let temp = 0;
	for ( let i = 3; i < n-1; i++ ) {
		temp = prev2;
		prev2 = prev2 + prev1;
		prev1 = temp;

	}
	return prev1 + prev2
}