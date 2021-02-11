const simple = require('./simple')
const fast = require('./fast')

const solutions = [
  simple,
  fast
]

const run = (start, target) => {
  const prompt = __dirname.split('/').pop()
  console.log(`\nPrompt ${prompt}`)

  solutions.forEach((solution) => {
    console.log(`\n>>> Running ${solution.name}`)
    solution.solve(start, target)
  })
}

module.exports = {
  solutions,
  run
}
