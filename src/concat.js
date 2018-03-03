import _curry2 from './internal/_curry2'
import _isArray from './internal/_isArray'
import _isString from './internal/_isString'

function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b)
    }
    throw new TypeError(b + ' is not an array')
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b
    }
    throw new TypeError(b + ' is not a string')
  }
  throw new TypeError(a + ' is not an array or string')
}

export default _curry2(concat)
