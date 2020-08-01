const path = require('path');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
    entry: baseConfig.entry,

    mode: 'production',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name]-[contenthash].min.js',
        chunkFilename: '[name]-[contenthash].min.js'
    },

    module: Object.assign({}, baseConfig.module, {
        rules: [
            ...baseConfig.module.rules
        ]
    }),

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        })
    ],

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 5,
            name: true,
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    enforce: true,
                    test: /node_modules/,
                    priority: -10
                },
                assets: {
                    chunks: 'all',
                    name: 'assets',
                    enforce: true,
                    test: /assets/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }

        },
        concatenateModules: true
    },
});