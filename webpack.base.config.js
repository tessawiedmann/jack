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
                test: /\.(jpeg|jpg|JPG|gif|png|svg|mp4|mp3)$/, loader: "file-loader"
            },
        ]
    }
}