var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {
    entry: "./app/app.module.js",
    output: {
        path: path.join(__dirname, 'app'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        })
    ]
};
