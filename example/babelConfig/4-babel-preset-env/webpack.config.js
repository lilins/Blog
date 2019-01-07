const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './index'),
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  } 
}