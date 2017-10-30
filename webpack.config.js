const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader',],
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};