// @codegen
const fs = require('fs')
const path = require('path')

const folder = './src'

module.exports = fs
  .readdirSync(folder)
  .filter(file => path.extname(file) === '.js')
  .map(file => path.parse(file).name)
  .filter(filename => filename !== 'index')
  .map(filename => `export { default as ${filename}} from './${filename}';`)
  .join('\n')
