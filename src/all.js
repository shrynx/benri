import _curry2 from './internal/_curry2'

function all(fn, list) {
  let idx = -1
  while (++idx < list.length) {
    if (!fn(list[idx])) {
      return false
    }
  }
  return true
}

export default _curry2(all)
