const { any } = require('../../dist/cjs/index')
const RAny = require('ramda/src/any')
const fpSome = require('lodash/fp/some')
const _some = require('lodash/some')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('any')

const array = Array(10000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 10000))

const isMultipleOfHundred = x => x % 100 === 0

suite
  .add('benri', () => {
    any(isMultipleOfHundred)(array)
  })
  .add('ramda', () => {
    RAny(isMultipleOfHundred)(array)
  })
  .add('lodash/fp', () => {
    fpSome(isMultipleOfHundred)(array)
  })
  .add('lodash', () => {
    _some(array, isMultipleOfHundred)
  })
  .add('native', () => {
    array.some(isMultipleOfHundred)
  })

runSuite(suite)
