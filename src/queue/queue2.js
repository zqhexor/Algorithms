// 方法二：对象版
class Queue {
  #items;
  #count;
  #lowestCount;

  constructor() {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }

  enqueue(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const element = this.#items[this.#lowestCount];
    Reflect.deleteProperty(this.#items, this.#lowestCount);
    this.#lowestCount++;
    return element;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.#items[this.#lowestCount];
  }

  isEmpty() {
    return this.#count === this.#lowestCount;
  }

  size() {
    return this.#count - this.#lowestCount;
  }

  clear() {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }

  toString() {
    return Object.values(this.#items).toString();
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
