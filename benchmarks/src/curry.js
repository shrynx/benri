const { curry } = require('../../dist/cjs/index')
const RCurry = require('ramda/src/curry')
const fpCurry = require('lodash/fp/curry')
const _curry = require('lodash/curry')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('curry')

const sum = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g

suite
  .add('benri', () => {
    curry(sum)(1)(2)(3)(4)(5)(6)(7)
  })
  .add('ramda', () => {
    RCurry(sum)(1)(2)(3)(4)(5)(6)(7)
  })
  .add('lodash/fp', () => {
    fpCurry(sum)(1)(2)(3)(4)(5)(6)(7)
  })
  .add('lodash', () => {
    _curry(sum)(1)(2)(3)(4)(5)(6)(7)
  })

runSuite(suite)
