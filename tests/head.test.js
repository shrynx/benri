import { head } from '../src'

describe('head', () => {
  test('should work on array', () => {
    expect(head([1, 2, 3])).toBe(1)
  })

  test('should work on strings', () => {
    expect(head('lambda')).toBe('l')
  })
})
