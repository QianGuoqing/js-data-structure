/**
 * ADT:
 * push(element): 添加元素到栈顶
 * pop(): 移除栈顶元素，栈长度减一，并返回被删除元素
 * peek(): 返回栈顶元素，栈本身不会被修改
 * isEmpty(): 判断栈是否为空，返回true或false
 * clear(): 清空栈
 * size(): 返回栈长度
 * description(): 返回栈的描述
 */
 class Stack {
   constructor() {
     this.items = []
   }

   isEmpty() {
     return this.items.length === 0
   }

   push(element) {
     this.items.push(element)
   }

   pop() {
     if (this.isEmpty()) {
       return null
     }
     return this.items.pop()
   }

   peek() {
     if (this.isEmpty()) {
       return null
     }
     return this.items[this.items.length - 1]
   }

   clear() {
     this.items = []
   }

   size() {
     return this.items.length
   }

   description() {
     return `Stack is: ${this.items.toString()}`
   }
 }

 module.exports = Stack