//AlgoExpert NodeDepth

function nodeDepths(root) {
	let total = 0;

	let stack = [{node: root, depth: 0}];
	while ( stack.length > 0 ) {
		const { node, depth } = stack.pop();
		if ( node === null ) continue;
		total += depth;
		stack.push({node: node.left, depth: depth +1});
		stack.push({node: node.right, depth: depth + 1});
	}
	return total;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}