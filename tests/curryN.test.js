import { curryN } from '../src'

describe('curryN', () => {
  const sum = (a, b, c) => a + b + c

  test('should accept arity', () => {
    const curried = curryN(3, sum)

    expect(curried(1)(2)(3)).toEqual(6)
    expect(curried(1, 2)(3)).toEqual(6)
    expect(curried(1)(2, 3)).toEqual(6)
    expect(curried(1, 2, 3)).toEqual(6)
  })

  test('should be curried', () => {
    const curried = curryN(3)(sum)

    expect(curried(1)(2)(3)).toEqual(6)
    expect(curried(1, 2)(3)).toEqual(6)
    expect(curried(1)(2, 3)).toEqual(6)
    expect(curried(1, 2, 3)).toEqual(6)
  })
})
