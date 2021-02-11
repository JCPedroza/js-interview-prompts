const simple = require('./simple')

const solutions = [
  simple
]

const run = (start, target) => {
  const prompt = __dirname.split('/').pop()
  console.log(`\nPrompt ${prompt}`)

  solutions.forEach((solution) => {
    console.log(`\n>>> Running ${solution.name}`)
    const solutionSequence = solution.solve(start, target)
    solutionSequence.forEach((num) => console.log(num))
  })
}

module.exports = {
  solutions,
  run
}
