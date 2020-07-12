const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.tsx',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },

    devServer: {
        https: true
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}