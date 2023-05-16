// 方法一: 数组版
class Stack {
  #items = [];

  push(element) {
    return this.#items.push(element);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
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
const stack = new Stack();
console.log('stack.isEmpty:', stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
console.log(stack.toString());
stack.pop();
console.log(stack.toString());
