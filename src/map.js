import _curry2 from './internal/_curry2'
import _isObject from './internal/_isObject'
import _mapList from './internal/_mapList'
import _mapObject from './internal/_mapObject'
import _isFunction from './internal/_isFunction'
import curryN from './curryN'

function map(fn, functor) {
  if (_isFunction(functor)) {
    return curryN(functor.length, function() {
      return fn.call(this, functor.apply(this, arguments))
    })
  } else if (_isObject(functor)) {
    return _mapObject(fn, functor)
  } else {
    return _mapList(fn, functor)
  }
}

export default _curry2(map)
