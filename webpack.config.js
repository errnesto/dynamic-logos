const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dst')
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              [require('babel-plugin-transform-react-jsx'), { 'pragma': 'h' }],
              require('babel-plugin-transform-class-properties')
            ],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  plugins: [new HtmlWebpackPlugin()]
}
