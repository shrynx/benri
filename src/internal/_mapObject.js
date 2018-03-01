function _mapObject(iteratee, object) {
  object = Object(object)
  var result = {}

  Object.keys(object).forEach(key => {
    result[key] = iteratee(object[key])
  })
  return result
}

export default _mapObject
