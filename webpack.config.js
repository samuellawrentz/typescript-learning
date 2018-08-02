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
devtool: 'source-map',
mode: 'development',
  module: {
    rules: [
      { test: /.ts$/, use: 'ts-loader' }
    ]
  }
};