const babelconfig = {
  plugins: ['codegen'],
}

if (process.env.NODE_ENV === 'test') {
  babelconfig.presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ]
}

module.exports = babelconfig
