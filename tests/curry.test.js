import { curry } from '../src'

describe('curry', () => {
  const sum = (a, b, c) => a + b + c

  test('should curry function', () => {
    const curried = curry(sum)

    expect(curried(1)(2)(3)).toEqual(6)
    expect(curried(1, 2)(3)).toEqual(6)
    expect(curried(1)(2, 3)).toEqual(6)
    expect(curried(1, 2, 3)).toEqual(6)
  })
})
