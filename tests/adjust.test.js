import { adjust } from '../src/'

describe('adjust', () => {
  const array = [0, 1, 2, 3, 4, 5, 6]
  const posIndex = 4
  const neagtiveIndex = -3
  const result = [0, 1, 2, 3, 16, 5, 6]

  const squared = x => x ** 2

  test('should work on array', () => {
    expect(adjust(squared, posIndex, array)).toEqual(result)
  })

  test('should be curried', () => {
    expect(adjust(squared)(posIndex)(array)).toEqual(result)
  })

  test('should work on negative index', () => {
    expect(adjust(squared)(neagtiveIndex)(array)).toEqual(result)
  })

  test('should return same array on big index', () => {
    expect(adjust(squared)(100)(array)).toEqual(array)
  })

  test('should not mutate orginal list', () => {
    const arr = [0, 1, 2, 3]
    expect(adjust(squared)(2)(arr)).toEqual([0, 1, 4, 3])
    expect(arr).toEqual([0, 1, 2, 3])
  })

  it('should accepts an array-like object', function() {
    const args = (...args) => {
      return args
    }
    expect(adjust(squared)(2)(args(0, 1, 2, 3))).toEqual([0, 1, 4, 3])
  })
})
