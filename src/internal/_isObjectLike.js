const objectTag = '[object Object]'
const argumentTag = '[object Arguments]'

function _isObject(value) {
  return (
    value != null &&
    (Object.prototype.toString.call(value) === objectTag ||
      Object.prototype.toString.call(value) === argumentTag)
  )
}

export default _isObject
