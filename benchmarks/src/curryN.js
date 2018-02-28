const { curryN } = require('../../dist/cjs/index')
const RCurryN = require('ramda/src/curryN')
const fpCurryN = require('lodash/fp/curryN')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('curryN')

const sum = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g

suite
  .add('benri', () => {
    curryN(7, sum)(1)(2)(3)(4)(5)(6)(7)
  })
  .add('ramda', () => {
    RCurryN(7, sum)(1)(2)(3)(4)(5)(6)(7)
  })
  .add('lodash/fp', () => {
    fpCurryN(7, sum)(1)(2)(3)(4)(5)(6)(7)
  })

runSuite(suite)
