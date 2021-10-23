//AlgoExpert

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

function branchSums(root) {
  const results = [];
	const sumBranches = (root, total, results) => {
		total += root.value;
		if ( !root.left && !root.right ) {
			results.push(total);

		}
		if ( root.left ) {
			 sumBranches(root.left, total, results)
		}
		if (root.right ) {
			 sumBranches(root.right, total, results)
		}
		return results;
	}
	sumBranches(root, 0, results);
	return results;
};