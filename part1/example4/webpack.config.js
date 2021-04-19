var path = require('path')
var webpack = require('webpack')


module.exports = {
  entry: ['./src/index'], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),

  ],
  module: {
    loaders: [{         //loader 陣列形式
      test: /\.scss$/,   //正則表達式，用來找出要套用loader的檔案
      loaders: ['style', 'css', 'sass'] //指定那些loader用來匹配要套用loader的檔案
    }]
  }
}
