function _filterObject(fn, object) {
  object = Object(object)
  var result = {}

  Object.keys(object).forEach(key => {
    var value = object[key]
    if (fn(value)) {
      result[key] = value
    }
  })
  return result
}

export default _filterObject
