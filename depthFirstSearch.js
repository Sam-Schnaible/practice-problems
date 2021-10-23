//AlgoExpert DFS

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {


		const getNames = node => {
			array.push(node.name);
			for ( let i = 0; i < node.children.length; i++ ) {
				getNames(node.children[i])
			}
			return array;
		}
		getNames(this);
		return array
	}
};