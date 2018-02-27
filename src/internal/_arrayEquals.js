import _isArray from './_isArray'

function _arrayEquals(arr1, arr2) {
  if (_isArray(arr1) && _isArray(arr2)) {
    if (arr1.length !== arr2.length) return false
    for (var i = arr1.length; i--; ) {
      if (arr1[i] === arr2[i]) {
        return true
      } else {
        return _arrayEquals(arr1[i], arr2[i])
      }
    }

    return true
  }
  return false
}

export default _arrayEquals
