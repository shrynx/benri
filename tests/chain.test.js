import { chain, head, append } from '../src'

describe('chain', () => {
  const array = [[1], [2], [3], [4]]
  const result = [2, 4, 6, 8]
  const double = x => x * 2

  it('maps a function over a nested list and returns the flattened result', () => {
    expect(chain(double, array)).toEqual(result)
  })

  it('should be curried', () => {
    expect(chain(double)(array)).toEqual(result)
  })

  it('should not recursively flatten', () => {
    const deepNestedArray = [[1], [[2], 100], [], [3, [4]]]
    const shallowFlatResult = [1, [2], 3]
    const f = xs => (xs[0] ? [xs[0]] : [])

    expect(chain(f)(deepNestedArray)).toEqual(shallowFlatResult)
  })

  it('should interpret monad', () => {
    expect(chain(append, head)([1, 2, 3])).toEqual([1, 2, 3, 1])
  })
})
