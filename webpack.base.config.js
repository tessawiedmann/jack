const path = require('path');

module.exports = {
    entry: './index.tsx',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/, loader: "file-loader"
            },
        ]
    }
}