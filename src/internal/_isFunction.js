const functionTag = '[object Function]'

function _isFunction(value) {
  return (
    value != null &&
    (typeof value === 'function' || Object.prototype.toString.call(value) === functionTag)
  )
}

export default _isFunction
