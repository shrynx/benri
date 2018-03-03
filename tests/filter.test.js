import { filter } from '../src'

describe('filter', () => {
  const array = [1, 2, 3, 4, 5, 6]
  const result = [2, 4, 6]
  const str = 'heLlO'
  const strRes = ['L', 'O']
  const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
  const obj2 = { b: 2, d: 4, f: 6 }
  const isEven = x => x % 2 === 0
  const isUpperCase = x => x === x.toUpperCase()

  test('simple array', () => {
    expect(filter(isEven, array)).toEqual(result)
  })

  test('can be curried', () => {
    expect(filter(isEven)(array)).toEqual(result)
  })

  test('should work on string and return array', () => {
    expect(filter(isUpperCase)(str)).toEqual(strRes)
  })

  test('should work on object', () => {
    expect(filter(isEven)(obj1)).toEqual(obj2)
  })

  test('should return empty array on empty array input or empty string', () => {
    expect(filter(isEven)([])).toEqual([])
    expect(filter(isEven)('')).toEqual([])
  })

  test('empty object should return empty object', () => {
    expect(filter(isEven)({})).toEqual({})
  })

  test('should return empty array on null input', () => {
    expect(filter(isEven)(null)).toEqual([])
  })

  test('should return empty array other primitives', () => {
    expect(filter(isEven)(5)).toEqual([])
  })
})
