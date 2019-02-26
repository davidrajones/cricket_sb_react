var webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const BabelEnginePlugin = require('babel-engine-plugin');
const babelrc = JSON.parse(fs.readFileSync('.babelrc', 'utf8'))

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(gif|eot|woff|woff2|ttf|svg|jpeg)$/,
        loaders: [
          'url-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new BabelEnginePlugin(babelrc, {
      presets: ['env']
    }) 
  ]
};
