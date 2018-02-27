const functionTag = '[object Function]'

function _isFunction(value) {
  return (
    value != null && (typeof value === 'function' || Object.prototype.toString.call(functionTag))
  )
}

export default _isFunction
