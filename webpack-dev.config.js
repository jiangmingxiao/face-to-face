const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index',
    output: {
        filename: '[name]-[hash:6].js',
        chunkFilename: '[name]-[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use:[
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader', options: {
                          sourceMap: true, modules: true,
                          localIdentName: '[local]'
                        }
                    },
                    {
                        loader: 'sass-loader', options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback:{
            index:'/'
        },
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