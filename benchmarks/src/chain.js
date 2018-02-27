const { chain } = require('../../dist/cjs/index')
const RChain = require('ramda/src/chain')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('chain')

const array = Array(10000)
  .fill(0)
  .map(x => [Math.floor(Math.random(1) * 10000)])

suite
  .add('benri', () => {
    chain(x => x ** 2)(array)
  })
  .add('ramda', () => {
    RChain(x => x ** 2)(array)
  })

runSuite(suite)
