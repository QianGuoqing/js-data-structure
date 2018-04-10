// 圆括号匹配
const Stack = require('./Stack')
const stack = new Stack()

function parenthesesMatch(givenString) {
  let givenStringArray = givenString.split('')
  for (let i = 0; i < givenStringArray.length; i++) {
    let current = givenStringArray[i]
    if (current === '(') {
      stack.push(current)
    } else if (current === ')') {
      if (stack.isEmpty()) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
}
