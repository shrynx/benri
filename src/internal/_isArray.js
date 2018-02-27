const arrayTag = '[object Array]'

function _isArray(value) {
  return (
    value !== null && (Array.isArray(value) || Object.prototype.toString.call(value) === arrayTag)
  )
}

export default _isArray
