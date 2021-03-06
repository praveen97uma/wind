var ProvidePlugin = require('webpack').ProvidePlugin;
var path = require('path');
const webpack = require('webpack');

var basePath = "../";

module.exports = {
    target: 'node',
    entry: {
        wind: './src/core/index.js'
    },

    output: {
        library: "Wind",
        path: basePath + "wind/build/",
        filename: "[name]/[name].js",
        libraryTarget: "umd"

    },

    module: {
        loaders: [{
            test: /\.js$/,
            //exclude: /node_modules/,
            loader: 'babel'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js'],
        root: [
            path.resolve(__dirname, '..', 'src'),
            path.resolve(__dirname, '..', 'node_modules'),
        ],
        modulesDirectories: ['node_modules', 'src/runtimes/web', 'src/runtimes'],
    }
};
