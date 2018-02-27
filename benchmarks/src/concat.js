const { concat } = require('../../dist/cjs/index')
const RConcat = require('ramda/src/concat')
const fpConcat = require('lodash/fp/concat')
const _concat = require('lodash/concat')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('concat')

const arr1 = Array(10000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 10000))

const arr2 = Array(10000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 10000))

suite
  .add('benri', () => {
    concat(arr1)(arr2)
  })
  .add('ramda', () => {
    RConcat(arr1)(arr2)
  })
  .add('lodash/fp', () => {
    fpConcat(arr1)(arr2)
  })
  .add('lodash', () => {
    _concat(arr1, arr2)
  })
  .add('native', () => {
    arr1.concat(arr2)
  })
  .add('native/es', () => [...arr1, ...arr2])

runSuite(suite)
