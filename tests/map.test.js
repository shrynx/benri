import { map } from '../src'

describe('map', () => {
  const array = [1, 2, 3]
  const result = [1, 4, 9]
  const stringArray = ['6', '8', '10']
  const numberArray = [6, 8, 10]

  test('simple array', () => {
    expect(map(x => x ** 2)(array)).toEqual(result)
  })

  test('can be curried', () => {
    expect(map(x => x ** 2)(array)).toEqual(result)
  })

  test('should be capped at one argument', () => {
    expect(map(parseInt)(stringArray)).toEqual(numberArray)
  })
})
