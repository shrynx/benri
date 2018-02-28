import curryN from './curryN'

function curry(fn) {
  return curryN(fn.length, fn)
}

export default curry
