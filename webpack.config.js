const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const minify = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
}

require("babel-polyfill");

module.exports = {
  entry: ["babel-polyfill", "./src/js/main.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // turn on for production deploy
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: {
              loader: 'babel-loader',
              options: {
                presets: ['vue-app']
              }
           },
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ],
      },
    ]
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    stats: 'errors-only',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 5500,
    historyApiFallback: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      minify: minify,
      template: './src/views/index.html',
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      minify: minify,
      template: './src/views/404.html',
      filename: './404.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      },
    ]),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new VueLoaderPlugin()
  ]
}