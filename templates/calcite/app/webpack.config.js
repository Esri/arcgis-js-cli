const ArcGISPlugin = require('@arcgis/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');

const path = require('path');

module.exports = function(_, arg) {
  const config = {
    entry: {
      index: ['./src/css/main.scss', '@dojo/framework/shim/Promise', './src/worker-config.ts', './src/index.ts'],
    },
    output: {
      filename: '[name].[chunkhash].js',
      publicPath: '',
    },
    optimization: {
      minimize: true,
      splitChunks: { minChunks: Infinity, chunks: 'all' },
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            discardComments: {
              removeAll: true,
            },
            // Run cssnano in safe mode to avoid
            // potentially unsafe transformations.
            safe: true,
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
            'eslint-loader',
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: false },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'resolve-url-loader',
              options: { includeRoot: true },
            },
            'sass-loader?sourceMap',
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),

      new ArcGISPlugin({
        features: {
          '3d': false,
          has: {
            'esri-native-promise': true,
          },
        },
      }),

      new HtmlWebPackPlugin({
        title: 'ArcGIS Template Application',
        template: './src/index.ejs',
        filename: './index.html',
        favicon: './src/assets/favicon.ico',
        chunksSortMode: 'none',
        inlineSource: '.(css)$',
        mode: arg.mode,
      }),

      new HtmlWebPackPlugin({
        template: './src/oauth-callback.html',
        filename: './oauth-callback.html',
        chunksSortMode: 'none',
        inject: false,
      }),

      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[id].css',
      }),

      new HtmlWebpackInlineSourcePlugin(),

      new WebpackPwaManifest({
        name: 'ArcGIS Application Template',
        short_name: 'ArcGISWebApp',
        description: 'My ArcGIS Template Application',
        background_color: '#0079c1',
        theme_color: '#0079c1',
        ios: true,
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          },
        ],
      }),
    ],
    resolve: {
      modules: [path.resolve(__dirname, '/src'), path.resolve(__dirname, 'node_modules/')],
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.scss', '.css'],
    },
    node: {
      process: false,
      global: false,
      Buffer: false,
      setImmediate: false,
      fs: 'empty',
    },
  };

  if (arg.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (arg.mode === 'production') {
    config.plugins.push(
      new WorkboxPlugin.GenerateSW({
        // Exclude images from the precache
        exclude: [/\.(?:png|jpg|jpeg|svg|gif)$/],

        // Define runtime caching rules.
        runtimeCaching: [
          {
            // Match any request ends with .png, .jpg, .jpeg or .svg.
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            // Apply a cache-first strategy.
            handler: 'cacheFirst',
          },
          {
            // Match any fonts
            urlPattern: /\.(?:eot|ttf|jpeg|woff|woff2)$/,
            // Apply a cache-first strategy.
            handler: 'cacheFirst',
          },
          {
            urlPattern: new RegExp('https://js.arcgis.com'),
            handler: 'staleWhileRevalidate',
          },
          {
            urlPattern: new RegExp('https://basemaps.arcgis.com'),
            handler: 'staleWhileRevalidate',
          },
          {
            urlPattern: new RegExp('https://arcgis.com/sharing'),
            handler: 'staleWhileRevalidate',
          },
        ],
      }),
    );
  }

  return config;
};
