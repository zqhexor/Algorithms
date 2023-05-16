/**
  * 队列：Queue
  */
// 方法一：数组版
class Queue {
  #items;

  constructor() {
    this.#items = [];
  }

  enqueue(element) {
    this.#items.push(element);
  }

  dequeue() {
    return this.#items.shift();
  }

  peek() {
    return this.#items[[0]];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
  }

  toString() {
    return this.#items.toString();
  }
}
// 使用
const queue = new Queue();
console.log('queue.isEmpty:', queue.isEmpty());
queue.enqueue('Taylor');
queue.enqueue('Ed');
console.log('queue.isEmpty:', queue.isEmpty());
console.log(queue.toString());
console.log(queue.peek());
queue.dequeue();
console.log(queue.toString());
