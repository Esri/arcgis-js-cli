const ArcGISPlugin = require("@arcgis/webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: ["./src/css/main.scss", "./src/index.ts"]
  },
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: ""
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          },
          // Run cssnano in safe mode to avoid
          // potentially unsafe transformations.
          safe: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "resolve-url-loader",
            options: { includeRoot: true }
          },
          "sass-loader?sourceMap"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),

    new ArcGISPlugin(),

    new HtmlWebPackPlugin({
      title: "ArcGIS Template Application",
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/assets/favicon.ico",
      chunksSortMode: "none",
      inlineSource: ".(css)$"
    }),

    new HtmlWebPackPlugin({
      template: "./src/oauth-callback.html",
      filename: "./oauth-callback.html",
      chunksSortMode: "none",
      inject: false
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    }),

    new HtmlWebpackInlineSourcePlugin(),

    new WorkboxPlugin.GenerateSW({
      // Exclude images from the precache
      exclude: [/\.(?:png|jpg|jpeg|svg|gif)$/],

      // Define runtime caching rules.
      runtimeCaching: [
        {
          // Match any request ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          // Apply a cache-first strategy.
          handler: "cacheFirst"
        },
        {
          // Match any fonts
          urlPattern: /\.(?:eot|ttf|jpeg|woff|woff2)$/,
          // Apply a cache-first strategy.
          handler: "cacheFirst"
        },
        {
          urlPattern: new RegExp("https://js.arcgis.com"),
          handler: "staleWhileRevalidate"
        },
        {
          urlPattern: new RegExp("https://basemaps.arcgis.com"),
          handler: "staleWhileRevalidate"
        },
        {
          urlPattern: new RegExp("https://arcgis.com/sharing"),
          handler: "staleWhileRevalidate"
        }
      ]
    }),

    new WebpackPwaManifest({
      name: "ArcGIS Application Template",
      short_name: "ArcGISWebApp",
      description: "My ArcGIS Template Application",
      background_color: "#0079c1",
      theme_color: "#0079c1",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, "/src"),
      path.resolve(__dirname, "node_modules/")
    ],
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  },
  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};
