const path = require('path')
const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: true,
    stats: 'minimal'
  },
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  entry: './src/index',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ]
      },
      {
        test: /\.jpg|png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProduction ? '[name].[hash].[ext]' : '[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
                quality: 80
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                enabled: false
              }
            }
          }
        ]
      },
      {
        test: /\.svg/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          interpolate: true,
          minimize: isProduction
        }
      }
    ]
  },
  output: {
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    path: path.resolve('./dist')
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: ['node_modules', 'src'],
    plugins: [new TsconfigPathsPlugin()]
  },
  plugins: getPlugins()
}

function getPlugins() {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    }),
    new ForkTsCheckerWebpackPlugin()
  ]

  if (!isProduction) {
    plugins.push(new DashboardPlugin())
  }

  if (process.env.WEBPACK_BUNDLE_ANALYZER) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
