const { aperture } = require('../../dist/cjs/index')
const RAperture = require('ramda/src/aperture')

const Benchmark = require('benchmark')
const runSuite = require('../runSuite')

const suite = new Benchmark.Suite('aperture')

const array = Array(10000)
  .fill(0)
  .map(x => Math.floor(Math.random(1) * 1000))

const count = Math.floor(Math.random(1) * 100)

suite
  .add('benri', () => {
    aperture(count)(array)
  })
  .add('ramda', () => {
    RAperture(count)(array)
  })

runSuite(suite)
