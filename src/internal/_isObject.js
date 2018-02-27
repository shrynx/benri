const objectTag = '[object Object]'

function _isObject(value) {
  return value != null && Object.prototype.toString.call(value) === objectTag
}

export default _isObject
