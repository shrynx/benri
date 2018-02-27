import { any } from '../src'

describe('any', () => {
  const array = [1, 2, 3, 4, 5]

  const isEven = x => x % 2 === 0
  const lessThanZero = x => x < 0

  test('should work on array', () => {
    expect(any(isEven, array)).toBe(true)
    expect(any(lessThanZero, array)).toBe(false)
  })

  test('should be curried', () => {
    expect(any(isEven)(array)).toBe(true)
    expect(any(lessThanZero)(array)).toBe(false)
  })
})
