const { basename } = require('path')

const name = basename(__filename)

const logNum = (num) => {
  const isMult3 = num % 3 === 0
  const isMult5 = num % 5 === 0

  if (isMult3 && isMult5) console.log('FizzBuzz')
  else if (isMult3) console.log('Fizz')
  else if (isMult5) console.log('Buzz')
  else console.log(num)
}

const solve = (start = 1, target = 50) => {
  for (let i = start; i <= target; i++) logNum(i)
}

module.exports = {
  name,
  solve
}
