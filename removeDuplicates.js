//AlgoExpert
//You're given a linked list whose nodes are sorted with respect to their values
//remove all duplicate values and return the linkedlist
//do not create a new list

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
	let node = linkedList;

	while ( node.next !== null ) {
		let nextDistinct = node.next;
		if ( node.value === nextDistinct.value ) {
			let temp = node.next.next;
			node.next.next = null;
			node.next = temp;
		} else {
			node = node.next;
		}
	}
  return linkedList;
};