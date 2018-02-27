const { adjust } = require('../../dist/cjs/index')
const RAdjust = require('ramda/src/adjust')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('adjust')

const array = Array(10000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 10000))

const idx = Math.floor(Math.random(1) * 10000)

suite
  .add('benri', () => {
    adjust(x => x ** 2)(idx)(array)
  })
  .add('ramda', () => {
    RAdjust(x => x ** 2)(idx)(array)
  })

runSuite(suite)
