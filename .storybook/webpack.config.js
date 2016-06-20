//var path = require('path')
var webpack = require('webpack')

module.exports = {
  module: {
    loaders: [
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
    ]
  }
}