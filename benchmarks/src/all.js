const { all } = require('../../dist/cjs/index')
const RAll = require('ramda/src/all')
const fpEvery = require('lodash/fp/every')
const _every = require('lodash/every')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('all')

const array = Array(10000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 10000))

const greaterThanHundred = x => x > 100

suite
  .add('benri', () => {
    all(greaterThanHundred)(array)
  })
  .add('ramda', () => {
    RAll(greaterThanHundred)(array)
  })
  .add('lodash/fp', () => {
    fpEvery(greaterThanHundred)(array)
  })
  .add('lodash', () => {
    _every(array, greaterThanHundred)
  })
  .add('native', () => {
    array.every(greaterThanHundred)
  })

runSuite(suite)
