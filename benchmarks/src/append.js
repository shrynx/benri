const { append } = require('../../dist/cjs/index')
const RAppend = require('ramda/src/append')
const fpConcat = require('lodash/fp/concat')
const _concat = require('lodash/concat')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('append')

const array = Array(10000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 10000))

const el = Math.floor(Math.random(1) * 10000)

suite
  .add('benri', () => {
    append(el)(array)
  })
  .add('ramda', () => {
    RAppend(el)(array)
  })
  .add('lodash/fp', () => {
    fpConcat(el)(array)
  })
  .add('lodash', () => {
    _concat(array, el)
  })
  .add('native', () => {
    array.concat(el)
  })

runSuite(suite)
