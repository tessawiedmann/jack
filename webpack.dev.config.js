const path = require('path');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = Object.assign({}, baseConfig, {
    entry: baseConfig.entry,

    mode: 'development',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },

    devServer: {
        hot: true,
        https: true
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: [/node_modules/]
    },

    module: Object.assign({}, baseConfig.module, {
        rules: [
            ...baseConfig.module.rules
        ]
    }),

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
});