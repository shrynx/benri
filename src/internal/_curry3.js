import _curry2 from './_curry2'

function _curry3(fn) {
  return function f(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f
      case 1:
        return _curry2(function(_b, _c) {
          return fn(a, _b, _c)
        })
      case 2:
        return function(_c) {
          return fn(a, b, _c)
        }
      default:
        return fn(a, b, c)
    }
  }
}

export default _curry3
