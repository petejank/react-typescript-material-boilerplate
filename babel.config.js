module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          transform: '@material-ui/core/${member}',
          preventFullImport: true
        },
        '@material-ui/icons': {
          transform: '@material-ui/icons/${member}',
          preventFullImport: true
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true
        }
      }
    ]
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel']
    },
    production: {
      plugins: ['@babel/plugin-transform-react-constant-elements', '@babel/plugin-transform-react-inline-elements']
    }
  }
}
