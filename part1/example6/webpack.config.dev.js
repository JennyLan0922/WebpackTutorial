var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-eval-source-map', //協助 debug 的工具。當得到一個錯誤，它會找到哪裡發生了錯誤，像是 chrome developer console
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //不必重整瀏覽器就可以更新檔案
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: { //使用這些 loader，可以 require 任何 .css 和 .png 到 .html 檔
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
