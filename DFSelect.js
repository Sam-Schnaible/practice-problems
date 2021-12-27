var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {
  var filteredNodes = [];
  this.depth = 0;
  var traverse = function(node) {
    if ( filter(node.value, node.depth)) {
      filteredNodes.push(node.value);
    }
    for ( var i = 0; i < node.children.length; i++ ) {
      traverse(node.children[i], node.children[i].depth = (node.depth +1));
    }
  }
  traverse(this);
  return filteredNodes;
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }

  return child;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};


Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};