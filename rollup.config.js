import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'

const pkg = require('./package.json')

const capitalize = str => {
  const [head, ...rest] = str.split('')
  return [head.toUpperCase(), ...rest].join('')
}

const cjsOutput = { file: pkg.main, format: 'cjs' }
const esOutput = { file: pkg.module, format: 'es' }
const umdOutput = {
  file: pkg.browser,
  format: 'umd',
  name: capitalize(pkg.name),
}
const input = 'src/index.js'

const basePlugins = [
  babel({
    exclude: 'node_modules/**',
    babelrc: true,
  }),
]

export default [
  {
    input,
    output: [cjsOutput, esOutput],
    plugins: basePlugins,
  },
  {
    input,
    output: umdOutput,
    plugins: [...basePlugins, minify()],
  },
]
