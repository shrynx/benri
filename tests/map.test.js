import { map } from '../src'

describe('map', () => {
  const array = [1, 2, 3]
  const result = [1, 4, 9]
  const stringArray = ['6', '8', '10']
  const numberArray = [6, 8, 10]
  const str = 'hello'
  const strRes = ['H', 'E', 'L', 'L', 'O']

  test('simple array', () => {
    expect(map(x => x ** 2)(array)).toEqual(result)
  })

  test('can be curried', () => {
    expect(map(x => x ** 2)(array)).toEqual(result)
  })

  test('should be capped at one argument', () => {
    expect(map(parseInt)(stringArray)).toEqual(numberArray)
  })

  test('should work on string and return array', () => {
    expect(map(x => x.toUpperCase())(str)).toEqual(strRes)
  })

  test('should return empty array on empty array input or empty string', () => {
    expect(map(parseInt)([])).toEqual([])
    expect(map(parseInt)('')).toEqual([])
  })

  test('should return empty array on null input', () => {
    expect(map(parseInt)(null)).toEqual([])
  })

  test('should return undefined array other primitives', () => {
    expect(map(parseInt)(5)).toEqual([undefined])
  })
})
