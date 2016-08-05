var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './client/Index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // SCSS
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      { test: /\.(png|jpg|jpeg|gif|woff|woff2)$/, loader: 'url?limit=8192' },
      { test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/" },
      { test: /\.svg$/, loader: "file" }
    ]
  }
};