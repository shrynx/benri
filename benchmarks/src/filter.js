const { filter } = require('../../dist/cjs/index')
const RFilter = require('ramda/src/filter')
const fpFilter = require('lodash/fp/filter')
const _filter = require('lodash/filter')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('filter')

const array = Array(1000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 1000))

const isEven = x => x % 2 === 0

suite
  .add('benri', () => {
    filter(isEven)(array)
  })
  .add('ramda', () => {
    RFilter(isEven)(array)
  })
  .add('lodash/fp', () => {
    fpFilter(isEven)(array)
  })
  .add('lodash', () => {
    _filter(array, isEven)
  })
  .add('native', () => {
    array.filter(isEven)
  })

runSuite(suite)
