const _isNaN =
  Number.isNaN ||
  function(value) {
    return value !== value // eslint-disable-line no-self-compare
  }

export default _isNaN
