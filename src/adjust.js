import _copyArray from './internal/_copyArray'
import _curry3 from './internal/_curry3'

function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list
  }

  const _idx = idx < 0 ? list.length + idx : idx

  const _list = _copyArray(list)
  _list[_idx] = fn(list[_idx])
  return _list
}

export default _curry3(adjust)
