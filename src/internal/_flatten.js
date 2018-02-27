function _flatten(array, depth) {
  let result = []

  if (array === null) {
    return result
  }

  for (const value of array) {
    if (depth > 0 && Array.isArray(value)) {
      if (depth > 1) {
        _flatten(value, depth - 1)
      } else {
        result.push(...value)
      }
    } else {
      result[result.length] = value
    }
  }
  return result
}

export default _flatten
