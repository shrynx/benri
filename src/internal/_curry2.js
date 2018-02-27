var _curry2 = function(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2
      case 1:
        return function(_b) {
          return fn(a, _b)
        }
      default:
        return fn(a, b)
    }
  }
}

export default _curry2
