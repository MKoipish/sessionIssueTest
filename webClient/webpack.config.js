const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUT_DIR = '../web';

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, OUT_DIR)
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'zlux-platform': path.resolve(__dirname, "../../zlux-plaform")
    }
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/template/index.html'
    })
  ]
};