const HtmlWebPackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CompressionPlugin = require("compression-webpack-plugin");
const zopfli = require("node-zopfli");
const path = require("path");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  entry: {
    akari: ["@babel/polyfill", "./src/index.tsx"],
  },
  output: {
    filename: "js/[name]-[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: {
          loader: "babel-loader?cacheDirectory",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader?cacheDirectory",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "html-loader",
            // options: { minimize: true }
          },
          "ejs-html-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./node_modules"],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            context: path.resolve(__dirname, "src"),
            name: "[path][name].[ext]?[contenthash]",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.ejs",
      filename: "index.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/reserve.ejs",
      filename: "reserve.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/contact.ejs",
      filename: "contact.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/bonchi.ejs",
      filename: "bonchi.html",
    }),
    // new AppManifestWebpackPlugin({
    //   logo: "./src/image/favicon/favicon_saurce.png",
    //   statsFilename: "iconstats.json",
    //   persistentCache: false,
    //   output: "/image/icons-[hash:8]/",
    // }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[hash].css",
      chunkFilename: "[id].css",
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/,
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      },
    }),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },

  devServer: {
    open: true,
    openPage: "",
    contentBase: path.join(__dirname, "src"),
    watchContentBase: true,
    port: 8080,
    historyApiFallback: {
      rewrites: [
        // { from: /^\/js\/jsstore.worker.ie.js/, to: "/js/jsstore.worker.ie.js" },
        { from: /^\/reserve/, to: "/reserve.html" },
        { from: /^\/contact/, to: "/contact.html" },
        { from: /^\/bonchi/, to: "/bonchi.html" },
      ],
    },
  },
  devtool: "inline-source-map",
};
