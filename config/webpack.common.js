const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, '../src/index.tsx')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    context: path.resolve(__dirname, '../src'),
    module: {
        rules: [
            {
                test: /\.(mjs|cjs)$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [autoprefixer({ grid: true })]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components|prod)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        node: '10'
                                    }
                                }
                            ],
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ],
                        plugins: [['@babel/plugin-proposal-class-properties']]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            favicon: '../src/assets/favicon.png',
            filename: 'index.html',
            template: path.resolve(__dirname, '../public', 'index.html')
        }),
        new webpack.DefinePlugin({
            'process.env.APP_ENV': JSON.stringify(`${process.env.APP_ENV}`)
        })
    ]
};
