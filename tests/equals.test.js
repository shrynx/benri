import { equals } from '../src'

describe('equals', () => {
  const num1 = 100
  const num2 = 100
  const num3 = 10

  const str1 = 'abc'
  const str2 = 'abc'
  const str3 = 'abd'

  const arr1 = [1, [2, 3]]
  const arr2 = [1, [2, 3]]
  const arr3 = [1, [2, 4]]

  const obj1 = { a: 'x', b: { c: 'y' } }
  const obj2 = { a: 'x', b: { c: 'y' } }
  const obj3 = { a: 'x', b: { c: 'z' } }

  const err1 = new Error('xyz')
  const err2 = new Error('xyz')
  const err3 = new Error('abc')

  const args = function() {
    return arguments
  }
  const arg1 = args(1, 2, 3)
  const arg2 = args(1, 2, 3)
  const arg3 = args(1, 2, 4)

  it('should work on boolean primitives', () => {
    expect(equals(true, true)).toBe(true)
    expect(equals(false, false)).toBe(true)
    expect(equals(true, false)).toBe(false)
    expect(equals(false, true)).toBe(false)
  })

  it('should be curried', () => {
    expect(equals(true, true)).toBe(true)
    expect(equals(true, false)).toBe(false)
  })

  it('should work on Boolean objects', () => {
    /* eslint-disable no-new-wrappers */
    expect(equals(new Boolean(true), new Boolean(true))).toBe(true)
    expect(equals(new Boolean(true), new Boolean(false))).toBe(false)
    /* eslint-enable no-new-wrappers */
  })

  it('Boolean primitives and Boolean objects should not be equal', () => {
    /* eslint-disable no-new-wrappers */
    expect(equals(true, new Boolean(true))).toBe(false)
    expect(equals(false, new Boolean(false))).toBe(false)
    /* eslint-enable no-new-wrappers */
  })

  it('should work on numbers', () => {
    expect(equals(num1, num2)).toBe(true)
    expect(equals(num1, num3)).toBe(false)
  })

  it('should work on number objects', () => {
    /* eslint-disable no-new-wrappers */
    expect(equals(new Number(num1), new Number(num2))).toBe(true)
    expect(equals(new Number(num1), new Number(num3))).toBe(false)
    /* eslint-enable no-new-wrappers */
  })

  it('Number primitives and Number objects should not be equal', () => {
    /* eslint-disable no-new-wrappers */
    expect(equals(num1, new Number(num1))).toBe(false)
    expect(equals(num3, new Number(num3))).toBe(false)
    /* eslint-enable no-new-wrappers */
  })

  it('should work on strings', () => {
    expect(equals(str1, str2)).toBe(true)
    expect(equals(str1, str3)).toBe(false)
  })

  it('should work on string objects', () => {
    /* eslint-disable no-new-wrappers */
    expect(equals(new String(str1), new String(str2))).toBe(true)
    expect(equals(new String(str1), new String(str3))).toBe(false)
    /* eslint-enable no-new-wrappers */
  })

  it('String primitives and String objects should not be equal', () => {
    /* eslint-disable no-new-wrappers */
    expect(equals(str1, new String(str1))).toBe(false)
    expect(equals(str3, new String(str3))).toBe(false)
    /* eslint-enable no-new-wrappers */
  })

  it('should work on arrays', () => {
    expect(equals(arr1, arr2)).toBe(true)
    expect(equals(arr1, arr3)).toBe(false)
  })

  it('should work on objects', () => {
    expect(equals(obj1, obj2)).toBe(true)
    expect(equals(obj1, obj3)).toBe(false)
  })

  it('should work on NaN', () => {
    expect(equals(NaN, NaN)).toBe(true)
    expect(equals(NaN, 0)).toBe(false)
  })

  it('should work on errors', () => {
    expect(equals(err1, err2)).toBe(true)
    expect(equals(err1, err3)).toBe(false)
  })

  it('should work on dates', () => {
    /* eslint-disable no-new-wrappers */
    expect(equals(new Date(0), new Date(0))).toBe(true)
    expect(equals(new Date(1), new Date(1))).toBe(true)
    expect(equals(new Date(0), new Date(1))).toBe(false)
    expect(equals(new Date(1), new Date(0))).toBe(false)
    /* eslint-enable no-new-wrappers */
  })

  it('should work on arguments', () => {
    expect(equals(arg1, arg2)).toBe(true)
    expect(equals(arg1, arg3)).toBe(false)
  })
})
