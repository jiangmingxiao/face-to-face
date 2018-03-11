const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index',
    output: {
        filename: '[name]-[hash:6].js',
        chunkFilename: '[name]-[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader'
            }
        ]
    },
    devServer: {
        hot: true,
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: '测试页面',
            template: './index.html', 
            inject: true 
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx','.json', '.js'],
        //alias: alias
    }
}