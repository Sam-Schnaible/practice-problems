var BinaryHeap = function () {
  this._heap = [];
  this._compare = function (i, j) { return i < j; };
};

BinaryHeap.prototype._getLesserChildIndex = function (parentIndex) {
  var childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter(function (index) {
    return index < this._heap.length;
  }, this);
  if (this._compare(this._heap[childIndices[0]], this._heap[childIndices[1]])) {
    return childIndices[0];
  } else {
    return childIndices[1];
  }
};

BinaryHeap.prototype._swap = function (index, parentIndex) {
  var temp = this._heap[index];
  this._heap[index] = this._heap[parentIndex];
  this._heap[parentIndex] = temp;
};

BinaryHeap.prototype.insert = function (node) {
  this._heap.push(node);
  var index = this._heap.length - 1;
  var parentIndex = Math.floor( (index - 1) / 2 );
  while ( index > 0 && ( this._compare(this._heap[index], this._heap[parentIndex]) ) ) {
    this._swap(index, parentIndex, this);
    index = parentIndex;
    parentIndex = Math.floor( (index - 1) / 2);
  }
};