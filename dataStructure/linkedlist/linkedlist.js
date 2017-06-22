const Node = function(value) {
  this.value = value;
  this.next = null;
}

const LinkedList = function(headValue) {
  this.head = new Node(headValue);
  this.tail = this.head;
}

LinkedList.prototype = {
  addToTail: function(value) {
    let node = new Node(value);
    if ( this.head.next === null) {
      this.head.next = node;
    }
    this.tail.next = node;
    this.tail = node;
  },
  forEach: function(callback) {
    var node = this.head;
    while(node) {
      callback(node.value);
      node = node.next;
    }
  },
  remove: function(node) {
    let parentNode = this.head;
    while(parentNode.next !== null) {
      if ( parentNode.value === node.value ) {
        parentNode.next = node.next;
        return node;
      } else {
        parentNode = parentNode.next;
      }
    }
  }
}

const newLinkedList = new LinkedList(5);
newLinkedList.addToTail(10);
newLinkedList.addToTail(11);
newLinkedList.forEach(function(val) { console.log(val)});

console.log(newLinkedList);