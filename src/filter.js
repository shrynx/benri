import _curry2 from './internal/_curry2'
import _isObject from './internal/_isObject'
import _filterList from './internal/_filterList'
import _filterObject from './internal/_filterObject'

function filter(pred, filterable) {
  if (_isObject(filterable)) {
    return _filterObject(pred, filterable)
  } else {
    return _filterList(pred, filterable)
  }
}

export default _curry2(filter)
