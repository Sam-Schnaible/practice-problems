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