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
})
