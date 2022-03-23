import ArcGISPlugin from '@arcgis/webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLInlineCSSWebpackPlugin from 'html-inline-css-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';

/**
 * Application options.
 */

// Application information.
const title = 'ArcGIS Webpack Template';
const description = 'ArcGIS API for JavaScript Webpack template application.';
const themeColor = '#007ac2';
const deployUrl = 'https://localhost:8080/';
const appImageUrl = 'socialcard.png';

// HTML plugin options for index.ejs. Primarily for title and meta tags.
// Mixes in...be careful.
// https://github.com/jantimon/html-webpack-plugin#options
const indexHtml = {
  hash: true,
  title,
  meta: {
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'theme-color': themeColor,
    'og:url': deployUrl,
    'og:type': 'website',
    'og:site_name': title,
    'og:title': title,
    'og:description': description,
    'og:image': appImageUrl,
  },
};

/**
 * Webpack options.
 */

// Output public path.
// Single page/routing apps must set to '/'.
// https://webpack.js.org/configuration/output/#outputpublicpath
const outputPublicPath = '';

// Dev server options.
// https://webpack.js.org/configuration/dev-server/
const devServer = {
  compress: true,
  https: false,
  port: 8080,
  open: true,
};

// Webpack devtool for source map generation.
// https://webpack.js.org/configuration/devtool/
const developmentDevtool = 'eval';
const productionDevtool = false;

// Workbox service workers.
// Important! Read up on and understand Workbox before use: https://developers.google.com/web/tools/workbox
// There are potential browser cache pitfalls and other repercussions for deploying an app with Workbox.
const workbox = false;
// Exclude files or patterns from Workbox.
const workboxExcludes = [];

/**
 * Webpack configuration.
 *
 * Editing only required to add additional plugins or effect how Webpack operates.
 */
export default (_, args) => {
  const mode = args.mode;

  const config = {
    // https://webpack.js.org/configuration/node/
    node: false,

    // Entry points.
    entry: {
      index: ['./src/index.scss', './src/index.ts'],
    },

    // Output parameters.
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: 'chunks/[id].js',
      publicPath: outputPublicPath,
      clean: true
    },

    // Development server parameters (provided in Webpack options above).
    devServer,

    devtool: mode === 'development' ? developmentDevtool : productionDevtool,

    // Optimize output in production only.
    optimization: {
      minimize: mode === 'production',
      splitChunks: { minChunks: Infinity, chunks: 'all' },
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      runtimeChunk: {
        name: 'runtime',
      },
    },

    // Module handling and loaders.
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
          ],
        },
        {
          test: /\.(ttf|eot|svg|png|jpg|gif|ico|wsv|otf|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
                importLoaders: 2,
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true,
                debug: mode === 'development',
                join: (_rul_uri, _rul_base) => {
                  // args must be included
                  return (arg) => {
                    // ArcGISPlugin copies assets and cannot be resolved when using api sass
                    // replace relative path with absolute path in `dist` so files can be found for resolving
                    return arg.bases.value.includes("@arcgis/core")
                      ? arg.uri.replace("../", "./assets/esri/themes/")
                      : arg.uri;
                  };
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },

    // Configure how modules are resolved.
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
    },

    // Webpack plugins.
    plugins: [
      new Dotenv({
        path: './.env.local'
      }),

      new ArcGISPlugin(),

      new HtmlWebPackPlugin({
        template: './src/index.ejs',
        filename: 'index.html',
        chunksSortMode: 'none',
        mode: mode,
        showErrors: mode === 'development',
        ...indexHtml,
      }),

      new HtmlWebPackPlugin({
        template: './src/oauth-callback.html',
        filename: 'oauth-callback.html',
        inject: false,
      }),

      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[id].css',
      }),

      new HTMLInlineCSSWebpackPlugin.default({
        filter: (fileName) => {
          return fileName.includes('index');
        },
      }),

      new CopyPlugin({
        patterns: [
          {
            context: 'src/assets/',
            from: '**/*',
          },
        ],
      }),
    ],
  };

  // Workbox plugin.
  if (mode === 'production' && workbox) {
    config.plugins.push(
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        exclude: [...workboxExcludes],
      }),
    );
  }

  return config;
};
