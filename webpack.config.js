const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientSrcPath = path.resolve(__dirname, "client/src");
const serverSrcPath = path.resolve(__dirname, "server/src");
const serverPublicPath = path.resolve(__dirname, "server/public");

module.exports = {
    entry: {
        index: path.resolve(clientSrcPath, "index.tsx"),
        newGame: path.resolve(clientSrcPath, "newGameDOM.tsx"),
    },
    output: {
        path: serverPublicPath,
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [ '.js', '.ts', '.tsx']
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            },
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
              },
            },
          },
        ]
      },
      plugins: [
          new CopyWebpackPlugin([{
                from: path.resolve(clientSrcPath, "style.css"),
                to: serverPublicPath
          }]),
          new HtmlWebpackPlugin({
              title: 'Fishbowl Scorekeeper',
              style: 'style.css',
              filename: 'index.html',
              chunks: ['index'],
              inject: false,
              template: path.resolve(serverSrcPath, "template.html")
          }),
          new HtmlWebpackPlugin({
            title: 'New Game',
            style: 'style.css',
            filename: 'newGame.html',
            chunks: ['newGame'],
            inject: false,
            template: path.resolve(serverSrcPath, "template.html")
        }),
      ]
}