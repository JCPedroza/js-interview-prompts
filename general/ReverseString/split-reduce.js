const name = 'Split & Reduce'

const reverser = (accumulator, current) => `${current}${accumulator}`

const solve = (str) => str.split('').reduce(reverser, '')

module.exports = {
  name,
  solve
}
