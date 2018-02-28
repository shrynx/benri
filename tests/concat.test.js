import { concat } from '../src'

describe('concat', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [4, 5, 6]
  const resultArr = [1, 2, 3, 4, 5, 6]

  const str1 = 'Hello '
  const str2 = 'World'
  const resultStr = 'Hello World'

  test('should work on array', () => {
    expect(concat(arr1, arr2)).toEqual(resultArr)
  })

  test('should be curried', () => {
    expect(concat(arr1)(arr2)).toEqual(resultArr)
  })

  test('should work on string', () => {
    expect(concat(str1)(str2)).toEqual(resultStr)
  })

  test('should throw error if array concats string', () => {
    expect(() => concat(arr1)(str2)).toThrowError(TypeError)
  })

  test('should throw error if string concats array', () => {
    expect(() => concat(str1)(arr2)).toThrowError(TypeError)
  })

  test('should throw error if value if neither string nor array', () => {
    expect(() => concat(1)(2)).toThrowError(TypeError)
  })
})
