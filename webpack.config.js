const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
    ],
  },

  //Aqui estan los Plugins
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
