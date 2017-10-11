var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/main.js'   //可以多个entry 
    //app2: './src/main2.js'
  },
  output: {
    path: "/build/js",
    filename: "[name].entry.chunk.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:/\.css$/,
        loaders:[ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.html$/,
        loaders:['html-loader']
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules/,
        loader: ['babel-loader']       
      }
    ]
  }
}