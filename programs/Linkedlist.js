class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let pt = this.head;
    while (pt.next) {
      pt = pt.next;
    }
    pt.next = newNode;
  }
  display() {
    console.log(this.head);
  }
}

const ll = new LinkedList();
ll.addFirst(1);
ll.addFirst(2);
ll.addFirst(3);
ll.addFirst(4);
ll.addLast(0);
ll.display();

// h->1-2-3
