function _objectEquals(a, b) {
  for (let prop in a) {
    if (a.hasOwnProperty(prop)) {
      if (b.hasOwnProperty(prop)) {
        if (typeof a[prop] === 'object') {
          if (!_objectEquals(a[prop], b[prop])) return false
        } else {
          if (a[prop] !== b[prop]) return false
        }
      } else {
        return false
      }
    }
  }
  return true
}

export default _objectEquals
