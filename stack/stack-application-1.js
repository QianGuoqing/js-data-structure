// 十进制转二进制
const Stack = require('./Stack')
const stack = new Stack()

function ten2binary(number) {
  let numberAry = []
  if (isNaN(Number(number))) {
    return
  }

  while (number > 0) {
    stack.push(number % 2)
    number = Math.floor(number / 2)
  }

  while (!stack.isEmpty()) {
    numberAry.push(stack.pop())
  }

  return numberAry.join('')
}

console.log(ten2binary(10))
