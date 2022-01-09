// Write a function that performs a breadth first search on a binary search tree

const BFS = (node) => {
	let queue = [];
	let visited = [];
    queue.push(node);
	while ( queue.length ) {
		node = queue.shift();
		if ( node.left ) {
			queue.push(node.left)
		}
		if ( node.right ) {
			queue.push(node.right)
		}
		visited.push(node.value);
	}
	return visited;
}