const HtmlWebPackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/css/html5reset-1.6.1.css", "./src/index.js"]
  },
  output: {
    filename: 'app-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
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
        // use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
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
    new HtmlWebPackPlugin({
      template: "./src/reserve.ejs",
      filename: 'reserve.html'
    }),
    new HtmlWebPackPlugin({
      template: "./src/contact.ejs",
      filename: 'contact.html'
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
