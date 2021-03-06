'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: "./frontend/main"
    },
    output: {
        path: __dirname + '/public',
        filename: "[name].js"
    },

    watch: true,

    resolve: {
        extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, 
            { test: /\.json$/, loader: "json-loader" }
        , {
            test: /\.pug$/,
            loader: "pug-loader",
            query: {
                pretty: true
            }
        }, {
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader!less-loader")
        }, {
            test: /\.(jpe?g|png|svg|gif)$/,
            loader: "file-loader?name=img/[name].[ext]",
            exclude: ["favicons"]
        }]
    },
    devServer: {
        host: "localhost",
        port: "3030",
        contentBase: __dirname + "/public/"
    },
    plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './frontend/index.pug'
    }),
        new ExtractTextPlugin("main.css", {allChunks: true})
    ]
};