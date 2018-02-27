import { append } from '../src'

describe('append', () => {
  const array = [1, 2, 3, 4, 5]
  const el = 6

  const result = [1, 2, 3, 4, 5, 6]

  test('should work on array', () => {
    expect(append(el, array)).toEqual(result)
  })

  test('should be curried', () => {
    expect(append(el)(array)).toEqual(result)
  })

  test('should work on empty array', () => {
    expect(append(1)([])).toEqual([1])
  })

  test('should not mutate orginal list', () => {
    const arr = [0, 1, 2, 3]
    expect(append(4)(arr)).toEqual([0, 1, 2, 3, 4])
    expect(arr).toEqual([0, 1, 2, 3])
  })
})
