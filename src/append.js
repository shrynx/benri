import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

function append(el, list) {
  return _concat(list, [el])
}

export default _curry2(append)
