const name = 'Recursive'

const solve = (str) => {
  if (str) return solve(str.slice(1)) + str.charAt(0)
  else return ''
}

module.exports = {
  name,
  solve
}
