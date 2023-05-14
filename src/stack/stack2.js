// 方法二: 对象版
class Stack {
  #count = 0;
  #items = {};

  push(element) {
    this.#items[this.#count] = element;
    this.#count++;
    return this.#count;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.#count--;
    const element = this.#items[this.#count];
    Reflect.deleteProperty(this.#items, this.#count);
    return element;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items[this.#count - 1];
  }

  isEmpty() {
    return this.#count === 0;
  }

  size() {
    return this.#count;
  }

  clear() {
    this.#count = 0;
    this.#items = {};
  }

  toString() {
    return Object.values(this.#items).toString();
  }
}

// 使用
const stack = new Stack();
console.log('stack.isEmpty:', stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
console.log(stack.toString());
console.log(stack.clear());
console.log(stack.toString());
