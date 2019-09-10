const HtmlWebPackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          },
          "ejs-html-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./node_modules"]
              }
            }
          }
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg|ico)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       name: './image/[name].[ext]'
      //     }
      //   }
      // },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        // use: ['file-loader?name=image/[name].[ext]']
        use: {
          loader: "file-loader",
          options: {
            name: "./image/[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.ejs"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/,
      compressionOptions: {
        level: 9
      }
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  }
};
