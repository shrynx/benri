import _curry2 from './internal/_curry2'

function any(fn, list) {
  let idx = -1
  while (++idx < list.length) {
    if (fn(list[idx])) {
      return true
    }
  }
  return false
}

export default _curry2(any)
