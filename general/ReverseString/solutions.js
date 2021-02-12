const splitReduce = require('./split-reduce')
const forLoop = require('./for-loop')
const splitReverseJoin = require('./split-reverse-join')
const destructReverseJoin = require('./destruct-reverse-join')
const recursive = require('./recursive')

const solutions = [
  splitReduce,
  forLoop,
  splitReverseJoin,
  destructReverseJoin,
  recursive
]

const run = (str) => {
  const prompt = __dirname.split('/').pop()
  console.log(`\nPrompt ${prompt}`)

  solutions.forEach((solution) => {
    console.log(`\n>>> Running ${solution.name}`)
    console.log(`input  : ${str}\noutput : ${solution.solve(str)}`)
  })
}

module.exports = {
  solutions,
  run
}
