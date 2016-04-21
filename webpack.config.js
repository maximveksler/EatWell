module.exports = {
  entry: ['webpack/hot/dev-server', './main.js'],
  output: {
    path: "./",
    filename: "index.js"
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        // "test" is commonly used to match the file extension
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
