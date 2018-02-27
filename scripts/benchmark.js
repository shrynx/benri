const fs = require('fs')
const path = require('path')
const spawn = require('cross-spawn')
const chalk = require('chalk')

const args = process.argv.slice(2)

console.log(`platform: ${process.platform}
arch:     ${process.arch}
node:     ${process.versions.node}
v8:       ${process.versions.v8}
`)

const runBenchmark = file => {
  const filePath = path.join('benchmarks', 'src', file)

  if (fs.existsSync(filePath)) {
    spawn.sync('node', [filePath], { stdio: 'inherit' })
  } else {
    console.log(`🚨 File
${chalk.red(filePath)}
not found`)
  }
}

if (args.length === 0) {
  const folderPath = path.join('benchmarks', 'src')

  fs.readdirSync(folderPath).forEach(file => {
    runBenchmark(file)
  })
} else if (args.length === 1) {
  const file = `${args[0]}.js`

  runBenchmark(file)
} else {
  console.log(
    '🚨 Error please specify a single file as argument or no argument to run all benchmarks'
  )
}
