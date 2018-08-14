// webpack v4
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require("fs");

let pages = [];
let page;
fs.readdirSync(path.resolve(__dirname, "src/templates")).forEach(file => {
  "use strict";
  if (path.basename(file, ".pug") != "es") {
    page = new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: `${path.basename(file, ".pug")}.html`,
      template: `./src/templates/${path.basename(file, ".pug")}.pug`,
      lang: "pt",
      title: path.basename(file, ".pug")
    });
    if (page) {
      pages.push(page);
    }
  }
});
fs.readdirSync(path.resolve(__dirname, "src/templates/es/")).forEach(file => {
  "use strict";

  if (path.basename(file, ".pug") != "es") {
    page = new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: `es/${path.basename(file, ".pug")}.html`,
      template: `./src/templates/es/${path.basename(file, ".pug")}.pug`,
      lang: "es",
      title: path.basename(file, ".pug")
    });
    if (page) {
      pages.push(page);
    }
  }
});
console.log(pages);

module.exports = {
  entry: {
    main: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.pug$/,
        loaders: ["pug-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: "file-loader"
      },
      {
        test: /font-awesome\.config\.js/,
        use: [{ loader: "style-loader" }, { loader: "font-awesome-loader" }]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
    ...pages,
    /*    new HtmlWebpackPlugin({
      template: "./src/templates/index.pug",
      inject: true,
      filename: "index.html",
      title: "Principal",
      lang: "pt"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/projeto.pug",
      inject: true,
      filename: "projeto.html",
      title: "Projeto"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/poesia.pug",
      inject: true,
      filename: "poesia.html",
      title: "Poesia"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/palhacaria.pug",
      inject: true,
      filename: "palhacaria.html",
      title: "Palhaçaria"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/cursos.pug",
      inject: true,
      filename: "cursos.html",
      title: "Cursos"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/contato.pug",
      inject: true,
      filename: "contato.html",
      title: "Contato"
    }),*/
    new WebpackMd5Hash(),
    new CopyWebpackPlugin([
      {
        from: "src/img",
        to: "img"
      }
    ])
  ]
};
