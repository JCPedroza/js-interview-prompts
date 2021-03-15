const name = 'If Chain'

const transform = (num) => {
  let msg = ''
  if (num % 3 === 0) msg = 'Fizz'
  if (num % 5 === 0) msg += 'Buzz'
  return msg || num.toString()
}

const solve = (start = 1, target = 50) => {
  const solutionSequence = []
  for (let num = start; num <= target; num++) {
    solutionSequence.push(transform(num))
  }
  return solutionSequence
}

module.exports = {
  name,
  solve
}
