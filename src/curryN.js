import _arity from './internal/_arity'
import _curry2 from './internal/_curry2'
import _curryN from './internal/_curryN'

function curryN(length, fn) {
  if (length === 1) {
    return fn
  }
  return _arity(length, _curryN(length, [], fn))
}

export default _curry2(curryN)
