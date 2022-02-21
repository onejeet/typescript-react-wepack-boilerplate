const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // minify js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].bundle.js',
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css'
        })
    ],

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],
        moduleIds: 'deterministic',
        runtimeChunk: 'single', // share same code bewteen js files
        splitChunks: {
            name: 'runtime',
            chunks: 'all'
        }
    }
});
