const solution = (target) => {
  let buffer = 0
  let last = 0
  let current = 1

  for (let i = 0; i < target; i++) {
    buffer = current
    current += last
    last = buffer
  }

  return current
}

module.exports = {
  solution
}