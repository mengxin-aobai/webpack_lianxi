const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //工作模式
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: `./src/index.html` })],
};
