const stringTag = '[object String]'

function _isString(value: any): boolean {
  return (
    value !== null &&
    (typeof value === 'string' || Object.prototype.toString.call(value) === stringTag)
  )
}

export default _isString
