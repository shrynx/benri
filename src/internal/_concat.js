import _copyArray from './_copyArray'

function _concat(arr, sec) {
  const base = arr.length
  const len = sec.length

  let idx = -1
  let _arr = _copyArray(arr)

  while (++idx < len) {
    _arr[base + idx] = sec[idx]
  }
  return _arr
}

export default _concat
