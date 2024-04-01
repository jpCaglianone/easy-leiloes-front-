const webpack = require('webpack');

module.exports = {
  // outras configurações do webpack aqui
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify')
    }
  },
  plugins: [
    // outros plugins aqui
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
