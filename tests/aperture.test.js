import { aperture } from '../src'

describe('aperture', () => {
  const array = [1, 2, 3, 4, 5]
  const count = 2
  const result = [[1, 2], [2, 3], [3, 4], [4, 5]]

  const outOfBound = array.length + 1

  test('should work on array', () => {
    expect(aperture(count, array)).toEqual(result)
  })

  test('should be curried', () => {
    expect(aperture(count)(array)).toEqual(result)
  })

  test('should return empty array if count is greater than length of array', () => {
    expect(aperture(outOfBound)(array)).toEqual([])
  })
})
