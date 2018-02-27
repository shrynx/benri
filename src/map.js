import _curry2 from './internal/_curry2'

function map(iteratee, list) {
  let idx = -1
  const length = list === null ? 0 : list.length
  const result = new Array(length)

  while (++idx < length) {
    result[idx] = iteratee(list[idx])
  }
  return result
}

export default _curry2(map)
