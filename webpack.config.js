
var webpack = require('webpack');
var path  = require('path');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./src/data')

module.exports = {
  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    }]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
      extensions: ['', '.js', '.jsx']
  }
}
