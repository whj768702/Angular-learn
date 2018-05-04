"use strict";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var Happypack = require('happypack');
var HappypackThreadPool = Happypack.ThreadPool({size:8});

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader?id=ts', 'angular-router-loader', 'angular2-template-loader?id=ts']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
            }
        ]
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new openBrowserPlugin({
            url: 'http://localhost:8080'
        }),

        new Happypack({
            id: 'ts',
            threadPool: HappypackThreadPool,
            loaders:['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']

        }),

        new Happypack({
            id: 'happyTS',
            threadPool: HappypackThreadPool,
            loaders: [{
                path: 'ts-loader',
                query: { happyPackMode: true}
            }]
        })
    ]
};
