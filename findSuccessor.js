//AlgoExpert

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const findSuccessor = (tree, node) => {

}

const getInOrderTraversalOrder = (node, order = []) => {
  if ( node === null ) return order;

  getInOrderTraversalOrder(node.left, order);
  order.push(node);
  getInOrderTraversalOrder(node.right, order);

  return order;
}