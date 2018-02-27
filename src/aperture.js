import _curry2 from './internal/_curry2'

function aperture(n, list) {
  var idx = -1
  var limit = list.length - (n - 1)
  var acc = new Array(limit >= 0 ? limit : 0)
  while (++idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n)
  }
  return acc
}

export default _curry2(aperture)
