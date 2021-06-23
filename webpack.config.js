const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //Entrada
  entry: "./src/index.js",

  //Salida de archivos cuando se compile
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  //Resolver extenciones del Proyecto
  resolve: {
    extensions: [".js", ".jsx"],
  },

  //REglas para Proyecto
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      //Regla para trabajar con HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },

      //Regla trabajar con SASS(SCSS) CSS
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },

      //Regla para trabajar con extensiones de imagenes
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },

  // Esta parte para trabajar con Rutas
  devServer: {
    historyApiFallback: true,
  },

  //Aqui estan los Plugins
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};
