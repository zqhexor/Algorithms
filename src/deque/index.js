/**
 * 双端队列：Deque (double-ended queue)：允许我们同时从前端和后端添加和移除元素的特殊队列
 */
// 方法一：数组版
class Deque {
  #items;

  constructor() {
    this.#items = [];
  }

  addFront(element) {
    this.#items.unshift(element);
  }

  addBack(element) {
    this.#items.push(element);
  }

  removeFront() {
    return this.#items.shift();
  }

  removeBack() {
    return this.#items.pop();
  }

  peekFront() {
    return this.#items[0];
  }

  peekBack() {
    return this.#items[this.#items.length - 1];
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
