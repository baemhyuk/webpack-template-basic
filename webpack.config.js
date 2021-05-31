//import
const path = require("path");
//Path = 전역모듈
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

//export
module.exports = {
  //parcel main.js
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  //결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),

    //resolve : 첫번째, 두번째 인수를 합쳐주는 것
    //__dirname : 전역적으로 사용할 수 있는 변수 (현재 파일이 있는 그 경로를 지칭)

    // filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
