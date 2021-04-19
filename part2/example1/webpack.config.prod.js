/* eslint no-var: 0 */

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
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
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({  //可以為我們整個 bundle 建立全域的常數
      'process.env.NODE_ENV': JSON.stringify('production')  //變數定義 process.env.NODE_ENV 的好處
                                                            //「目前環境」是使用 process.env.BABEL_ENV。
                                                            //當找不到 BABEL_ENV 時， 它會退回去找 NODE_ENV，如果也找不到 NODE_ENV，目前環境將設為預設值 "development"。
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src') //限制解譯的Folder
                                           //也可改變成 exclude: /node_modules/
    }]
  }
}
