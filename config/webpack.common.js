"use strict";
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const happyPack = require('happypack');
const happyPackThreadPool = happyPack.ThreadPool({size: 8});

module.exports = {
    mode: 'production',

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
        new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)fesm5/,
            helpers.root('./src'),
            {}
        ),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new openBrowserPlugin({
            url: 'http://localhost:8080'
        }),

        new happyPack({
            id: 'ts',
            threadPool: happyPackThreadPool,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']

        }),

        new happyPack({
            id: 'happyTS',
            threadPool: happyPackThreadPool,
            loaders: [{
                path: 'ts-loader',
                query: {happyPackMode: true}
            }]
        })
    ]
};
