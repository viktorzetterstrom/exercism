export class LinkedList {
  constructor() {
    this._first = null;
    this._last = null;
  }

  push(value) {
    const node = new Node(value);
    if (this._first === null) {
      this._first = node;
      this._last = node;
      return;
    }
    node.prev = this._last;
    this._last.next = node;
    this._last = node;
  }

  pop() {
    const value = this._last.value;
    if (this._last.prev === null) {
      this._first = null;
      this._last = null;
      return value;
    }
    this._last = this._last.prev;
    this._last.next = null;
    return value;
  }

  shift() {
    const value = this._first.value;
    if (this._first.next === null) {
      this._first = null;
      this._last = null;
      return value;
    }
    this._first = this._first.next;
    this._first.prev = null;
    return value;
  }

  unshift(value) {
    const node = new Node(value);
    if (this._first === null) {
      this._first = node;
      this._last = node;
      return;
    }
    this._first.prev = node;
    node.next = this._first;
    this._first = node;
  }

  delete(value) {
    let node = this._first;
    if (this._first.value && this._first.value === value) return this.shift();
    if (this._last.value && this._last.value === value) return this.pop();

    while (node.next !== null) {
      if (node.value === value) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
      }
      node = node.next
    }
  }

  count() {
    if (this._first === null) return 0;

    let count = 1;
    let node = this._first;
    while (node.next !== null) {
      count++;
      node = node.next;
    }
    return count;
  }
}

class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
