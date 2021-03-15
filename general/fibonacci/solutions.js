const forLoop = require('./for-loop')

const run = (n) => [...Array(n).keys()].forEach((m) => console.log(forLoop.solution(m)))

module.exports = {
  run
}
