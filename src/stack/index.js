// 方法一
class Stack {
    constructor(){
        this.items = []
    }

    pop() {
       return  this.items.pop()
    }

    push() {
        return this.items.push()
    }
}