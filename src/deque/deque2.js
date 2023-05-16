// 方法二：对象版
class Deque {
  #items;
  #count;
  #lowestCount;

  constructor() {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }

  addFront(element) {
    this.#lowestCount--;
    this.#items[this.#lowestCount] = element;
  }

  addBack(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }

  removeFront() {
    if (this.isEmpty()) return undefined;

    const element = this.#items[this.#lowestCount];
    Reflect.deleteProperty(this.#items, this.#lowestCount);
    this.#lowestCount++;
    return element;
  }

  removeBack() {
    if (this.isEmpty()) return undefined;

    this.#count--;
    const element = this.#items[this.#count];
    Reflect.deleteProperty(this.#items, this.#count);
    return element;
  }

  peekFront() {
    return this.#items[this.#lowestCount];
  }

  peekBack() {
    return this.#items[this.#count - 1];
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
const deque = new Deque();
console.log(deque.isEmpty()); // true
deque.addBack('john');
deque.addBack('jack');
console.log(deque.toString()); // john, jack
deque.addBack('camila');
console.log(deque.size()); // 3
console.log(deque.isEmpty()); // false
deque.removeFront();
console.log(deque.toString()); // jack, camila
deque.removeBack();
console.log(deque.toString()); // jack
deque.addFront('john');
console.log(deque.toString()); // john, jack
