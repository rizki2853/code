const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'scripts/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'templates/index.html'),
        })
    ]
};
