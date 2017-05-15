'use strict';

const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	main: "./frontend/main"
  },
  output: {
  	path: __dirname + '/public',
    filename: "[name].js",
  },

  watch: true,

  module: {
        loaders: [{
        	test: /\.js$/,
        	loader: 'babel-loader',
        	query: {
        		presets: ['es2015'],
        		plugins: ['transform-runtime']
          }
        }, {
        	test: /\.pug$/,
        	loader: "pug-loader",
          query: {
            pretty: true
          }
        }, {
          test: /\.less$/,
          loader: "style!css!less"
        }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './frontend/index.pug'
    })
  ]

};