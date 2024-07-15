// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.get('/before', function (req, res) {
        res.json({ message: 'Before setup middleware' });
      });

      devServer.app.get('/after', function (req, res) {
        res.json({ message: 'After setup middleware' });
      });

      return middlewares;
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
