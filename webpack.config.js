const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill', './src/main.js'],
  output: {
     path: path.resolve(__dirname, 'public'),
     publicPath: '/',
     filename: 'bundle.js'
  },


  devServer: {
    contentBase: __dirname + '/public',
    historyApiFallback: true,
    hot: true,
    compress: true,
    watchOptions: {
      poll: true
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
            presets: [["es2015", { "modules": false }], "stage-0", "react"],
            plugins: [
              'react-hot-loader/babel'
            ]
          },

      },
      {
        test: /\.(css|sass)$/, use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/, use: "url-loader?mymetype=image",
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: {
      net: 'empty',
      dns: 'empty'
  }
};


if(NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}
