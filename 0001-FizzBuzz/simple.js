const { basename } = require('path')

const name = basename(__filename)

const logNum = (num) => {
  let msg = ''
  if (num % 3 === 0) msg = 'Fizz'
  if (num % 5 === 0) msg += 'Buzz'
  console.log(msg || num)
}

const solve = (start = 1, target = 50) => {
  for (let i = start; i <= target; i++) logNum(i)
}

module.exports = {
  name,
  solve
}
