const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/arc.ts',
  output: {
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: {
    'd3': 'd3'
},
devServer: {
  contentBase: './dist'
},
plugins: [
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  })
],
devtool: 'source-map',
mode: 'development',
  module: {
    rules: [
      { test: /.ts$/, use: 'ts-loader' }
    ]
  }
};