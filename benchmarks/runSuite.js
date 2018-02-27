const padl = (n, s) => {
  while (s.length < n) {
    s += ' '
  }
  return s
}

const padr = (n, s) => {
  while (s.length < n) {
    s = ' ' + s
  }
  return s
}

function logResults(e) {
  var t = e.target

  if (t.failure) {
    console.error(padl(10, t.name) + 'FAILED: ' + e.target.failure)
  } else {
    var result =
      padl(18, t.name) +
      padr(13, t.hz.toFixed(2) + ' op/s') +
      ' \xb1' +
      padr(7, t.stats.rme.toFixed(2) + '%') +
      padr(15, ' (' + t.stats.sample.length + ' samples)')

    console.log(result)
  }
}

function logStart() {
  console.log(this.name)
  console.log('-------------------------------------------------------')
}

function logComplete() {
  console.log('-------------------------------------------------------')
  console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  console.log('-------------------------------------------------------')
  console.log('\n')
}

function runSuite(suite) {
  return suite
    .on('start', logStart)
    .on('cycle', logResults)
    .on('complete', logComplete)
    .run()
}

module.exports = runSuite
