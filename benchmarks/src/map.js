const { map } = require('../../dist/cjs/index')
const RMap = require('ramda/src/map')
const fpMap = require('lodash/fp/map')
const _map = require('lodash/map')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('map')

const array = Array(1000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 1000))

suite
  .add('benri', () => {
    map(x => x * 2)(array)
  })
  .add('ramda', () => {
    RMap(x => x * 2)(array)
  })
  .add('lodash/fp', () => {
    fpMap(x => x * 2)(array)
  })
  .add('lodash', () => {
    _map(array, x => x * 2)
  })
  .add('native', () => {
    array.map(x => x * 2)
  })

runSuite(suite)
