import { all } from '../src'

describe('all', () => {
  const array = [1, 2, 3, 4, 5]

  const greaterThanZero = x => x > 0
  const isEven = x => x % 2 === 0

  test('should work on array', () => {
    expect(all(greaterThanZero, array)).toBe(true)
    expect(all(isEven, array)).toBe(false)
  })

  test('should be curried', () => {
    expect(all(greaterThanZero)(array)).toBe(true)
    expect(all(isEven)(array)).toBe(false)
  })
})
