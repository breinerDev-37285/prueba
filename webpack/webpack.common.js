const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin')

const srcFolder = path.resolve(__dirname, '..', 'src')
const src = path.resolve(__dirname, '..', 'src', 'app')
const publicFolder = path.resolve(__dirname, '..', 'public')

module.exports = {
  entry: path.resolve(srcFolder, 'index.tsx'),
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|ico|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(publicFolder, 'index.html'),
    }),
    new NodePolyfillWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@components': path.resolve(src, 'components'),
      '@interfaces': path.resolve(src, 'interfaces'),
    },
  },
  stats: 'errors-only',
}
