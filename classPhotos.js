//AlgoExpert
//2 arrays, one red, one blue, same length, all positive integers
//each array represents students on class photo day
//all red shirts must be in same row, and all blue must be in same row
//each student in back row must be taller ( greater than ) the student in front row
//Write a function that return true or false as to whether or not the stated guidelines
//can be met

function classPhotos(redShirtHeights, blueShirtHeights) {
  let guidelinesFollowed = true;
	redShirtHeights.sort((a, b) => a - b);
	blueShirtHeights.sort((a, b) => a - b);
	for ( let i = 0; i < redShirtHeights.length; i++ ) {
		if ( redShirtHeights[i] <= blueShirtHeights[i] ) {
			guidelinesFollowed = false;
			break;
		}
	}
	if ( !guidelinesFollowed ) {
		guidelinesFollowed = true;
		for ( let i = 0; i < redShirtHeights.length; i++ ) {
		    if ( redShirtHeights[i] >= blueShirtHeights[i] ) {
				guidelinesFollowed = false;
				return guidelinesFollowed;
		}
	}
	}
  return guidelinesFollowed;
}