const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./dynamic.js"),
  output: {
    filename: "build/application.js",
  },
  devtool: "sourcemap",
  module: {
    type: "module",
  },
};
