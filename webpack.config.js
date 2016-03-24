var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [ {test: /\.js$/, exclude: /node_modules/, include: path.join(__dirname, 'src'), loaders: [ 'babel' ]} ]
  }
}
