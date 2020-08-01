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
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/, loader: "file-loader?name=./images/[name].[ext]"
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}