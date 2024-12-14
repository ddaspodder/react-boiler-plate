const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  mode: "development",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    port: "3000",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        type: "asset",
        generator: {
          outputPath: "images/",
          publicPath: "images/",
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      { test: /\.(ts|tsx)$/, use: ["babel-loader"] },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
