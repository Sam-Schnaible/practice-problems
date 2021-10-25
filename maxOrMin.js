//You are given two arrays of equal length containing all postive integers
//elements from each array will be paired with one another
//A parameter, minOrMax will also be passed to the function. If minOrMax is true,
//find the larget possible sum off all pairs, else find the smallest

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, minOrMax) {
	let result = 0;
	if ( minOrMax ) {
	redShirtSpeeds.sort((a, b) => b - a);
	blueShirtSpeeds.sort((a, b) => a - b);
	} else {
		redShirtSpeeds.sort((a, b) => a - b);
		blueShirtSpeeds.sort((a, b) => a - b);
	}
	for ( let i = 0; i < redShirtSpeeds.length; i++ ) {
		result += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
	}
  return result;
}