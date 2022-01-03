//AlgoExpert

function findClosestValueInBst(tree, target) {
  return findClosest(tree, target, tree.value);
}

const findClosest = (tree, target, close) => {
	if ( tree === null ) return close;

	if ( Math.abs(target - close) > Math.abs(target - tree.value)) {
		close = tree.value;
	}
	if ( target > tree.value ) {
		return findClosest(tree.right, target, close)
	} else if ( target < tree.value ) {
		return findClosest(tree.left, target, close);
	} else {
		return close;
	}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}