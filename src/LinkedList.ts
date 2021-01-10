import { Sorter } from "./Sorter";
class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;
    let tail = this.head;
    let length = 1;
    while (tail.next) {
      length++;
      tail = tail.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) throw new Error("Index out of bounds");
    let node: Node = this.head;
    let i = 0;
    while (index !== i) {
      i++;
      if (node.next) node = node.next;
      else throw new Error("Index out of bounds");
    }
    return node;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("List is Empty");
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) throw new Error("List is Empty");
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);
    const current = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = current;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
