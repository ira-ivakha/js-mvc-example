let path = require('path');

module.exports = {
    entry: './public/src/js/todo/index.js',
    output: {
        filename: './public/js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'jshint-loader'
        }]
    }
};
