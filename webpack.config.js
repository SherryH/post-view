const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Q: how are CSS extracted to be Modular CSS?
// https://github.com/webpack-contrib/css-loader
// style-loader, css-loader are the loaders used
// param: moodules - specifices we gonna extract to CSS modules
// importLoaders - how many loaders after css-loader are used e.g. postcss-loader
// localIdentName is used for configuring the new identified name in the generated CSS. add 5 char from base64 hash [hash:base64:5]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/compiled/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=0&localIdentName=[name]__[local]___[hash:base64:5]' }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'styleModular.css', allChunks: true }),
  ],

};
