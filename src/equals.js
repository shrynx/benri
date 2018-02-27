import _curry2 from './internal/_curry2'
import _isArray from './internal/_isArray'
import _isObjectLike from './internal/_isObjectLike'
import _isNaN from './internal/_isNaN'
import _isError from './internal/_isError'
import _arrayEquals from './internal/_arrayEquals'
import _objectEquals from './internal/_objectEquals'

function equals(a, b) {
  if (typeof a === typeof b) {
    switch (true) {
      case a.valueOf() === b.valueOf():
        return true
      case _isArray(a) && _isArray(b):
        return _arrayEquals(a, b)
      case _isObjectLike(a) && _isObjectLike(b):
        return _objectEquals(a, b)
      case _isNaN(a) && _isNaN(b):
        return true
      case _isError(a) && _isError(b):
        return a.name === b.name && a.message === b.message
      default:
        return false
    }
  } else {
    return false
  }
}

export default _curry2(equals)
