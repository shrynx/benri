const errorTag = '[object Error]'

function _isError(value) {
  return value != null && Object.prototype.toString.call(value) === errorTag
}

export default _isError
