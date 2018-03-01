function _filterList(fn, list) {
  var idx = 0
  var len = list == null ? 0 : list.length
  var result = []

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx]
    }
    idx += 1
  }
  return result
}

export default _filterList
