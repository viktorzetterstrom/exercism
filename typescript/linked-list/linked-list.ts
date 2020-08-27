class Node<T> {
  constructor(
    public value: T,
    public previous: Node<T> | null,
    public next: Node<T> | null
  ) {}
}

export default class LinkedList<T> {
  private tail: Node<T> | null = null;
  private head: Node<T> | null = null;

  push(element: T): void {
    const node = new Node<T>(element, null, null);
    if (!this.tail || !this.head) {
      this.tail = node;
      this.head = node;
      return;
    }

    this.head.next = node;
    node.previous = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) return;

    const value = this.head.value;
    if (!this.head.previous) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.previous;
    }
    return value;
  }

  unshift(element: T): void {
    const node = new Node<T>(element, null, null);
    if (!this.tail || !this.head) {
      this.tail = node;
      this.head = node;
      return;
    }

    this.tail.previous = node;
    node.next = this.tail;
    this.tail = node;
  }

  shift(): T | undefined {
    if (!this.tail) return;

    const value = this.tail.value;
    if (!this.tail.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.next;
    }
    return value;
  }

  count(): number {
    if (!this.tail) return 0;

    let count = 1;
    let node = this.tail;
    while (node.next !== null) {
      node = node.next;
      count++;
    }
    return count;
  }

  delete(value: T): void {
    if (!this.tail) return;

    let node: Node<T> | null = this.tail;
    while (node !== null) {
      if (value === node.value) {
        // Delete single node list
        if (node.previous === null && node.next === null) {
          this.head = null;
          this.tail = null;
          return;
        }

        // Delete tail node
        if (node.next === null) {
          node.previous!.next = null;
          return;
        }

        // Delete head node
        if (node.previous === null) {
          node.next.previous = null;
          return;
        }

        // Delete node between nodes
        node.previous.next = node.next;
        node.next.previous = node.previous;
        return;
      }

      node = node.next;
    }
  }
}
