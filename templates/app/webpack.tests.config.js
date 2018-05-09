const path = require("path");

const ArcGISPlugin = require("@arcgis/webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    init: "./src/index.ts",
    tests: "./tests/unit/all.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./~tmp")
  },

  resolve: {
    modules: [
      path.resolve(__dirname, "./src"),
      path.resolve(__dirname, "./tests"),
      "node_modules/"
    ],
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },

  plugins: [new CleanWebpackPlugin(["~tmp"]), new ArcGISPlugin()],

  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};
