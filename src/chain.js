import _curry2 from './internal/_curry2'
import _flatten from './internal/_flatten'
import map from './map'

function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) {
      return fn(monad(x))(x)
    }
  } else {
    return _flatten(map(fn, monad), 1)
  }
}

export default _curry2(chain)
