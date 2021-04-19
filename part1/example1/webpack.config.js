var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/index'], // .js after index is optional
                          //bundle的進入點
                          //entry是一個陣列
                          //可以設定多個進入點，來產生bundle
  output: {
    path: path.join(__dirname, 'dist'), //存放bundle檔案的位置
    filename: 'bundle.js'               //bundle的檔案名稱
  },
  plugins: [//webpack 額外的功能
    new webpack.optimize.UglifyJsPlugin({ //minify javascript
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
}
