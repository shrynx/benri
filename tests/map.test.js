import { map } from '../src'

describe('map', () => {
  const array = [1, 2, 3]
  const result = [1, 4, 9]
  const stringArray = ['6', '8', '10']
  const numberArray = [6, 8, 10]
  const str = 'hello'
  const strRes = ['H', 'E', 'L', 'L', 'O']
  const obj1 = { a: 1, b: 2, c: 3 }
  const obj2 = { a: 1, b: 4, c: 9 }
  const square = x => x ** 2
  const double = x => x * 2

  test('simple array', () => {
    expect(map(square)(array)).toEqual(result)
  })

  test('can be curried', () => {
    expect(map(square)(array)).toEqual(result)
  })

  test('should be capped at one argument', () => {
    expect(map(parseInt)(stringArray)).toEqual(numberArray)
  })

  test('should work on string and return array', () => {
    expect(map(x => x.toUpperCase())(str)).toEqual(strRes)
  })

  test('should work on object', () => {
    expect(map(square)(obj1)).toEqual(obj2)
  })

  test('should work on (->) functor', () => {
    expect(map(square)(double)(5)).toEqual(100)
    expect(map(square)(double)([5])).toEqual(100)
  })

  test('should return empty array on empty array input or empty string', () => {
    expect(map(parseInt)([])).toEqual([])
    expect(map(parseInt)('')).toEqual([])
  })

  test('empty object should return empty object', () => {
    expect(map(square)({})).toEqual({})
  })

  test('should return empty array on null input', () => {
    expect(map(parseInt)(null)).toEqual([])
  })

  test('should return undefined array other primitives', () => {
    expect(map(parseInt)(5)).toEqual([undefined])
  })
})
