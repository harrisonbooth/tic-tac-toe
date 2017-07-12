module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist/build",
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)(specs)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}