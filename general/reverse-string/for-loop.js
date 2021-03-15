const name = 'For Loop'

const solve = (str) => {
  let reverseStr = ''
  for (let i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr
  }
  return reverseStr
}

module.exports = {
  name,
  solve
}
