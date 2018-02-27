const { head } = require('../../dist/cjs/index')
const RHead = require('ramda/src/head')
const fpHead = require('lodash/fp/head')
const _head = require('lodash/head')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('head')

const array = Array(10000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 10000))

suite
  .add('benri', () => {
    head(array)
  })
  .add('ramda', () => {
    RHead(array)
  })
  .add('lodash/fp', () => {
    fpHead(array)
  })
  .add('lodash', () => {
    _head(array)
  })

runSuite(suite)
