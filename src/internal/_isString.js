const stringTag = '[object String]'

function _isString(value) {
  return (
    value !== null &&
    (typeof value === 'string' || Object.prototype.toString.call(value) === stringTag)
  )
}

export default _isString
