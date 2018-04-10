/**
 * ADT
 * enqueue(element): 队尾添加数据
 * dequeue(): 队首删除数据，并且返回被删除的元素
 * front(): 返回队首元素，队列本身不发生改变
 * isEmpty(): 判断队列是否为空，返回true或者false
 * size(): 返回队列长度
 * */

class Queue {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    if (this.items.isEmpty()) {
      return null
    }
    return this.items.shift()
  }

  front() {
    if (this.items.isEmpty()) {
      return null
    }
    return this.items[0]
  }

  size() {
    return this.items.length
  }
}

module.exports = Queue