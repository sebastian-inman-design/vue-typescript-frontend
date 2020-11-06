const Terser = require("terser-webpack-plugin")
const WebpackBar = require("webpackbar")
const TypeScriptPaths = require("tsconfig-paths-webpack-plugin")
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin")


module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: "./build",
  configureWebpack: {
    entry: "./source/main.ts",
    output: {
      filename: '[name].[contenthash].js'
    },
    resolve: {
      plugins: [ new TypeScriptPaths() ]
    },
    plugins: [
      new WebpackBar(),
    ],
    optimization: {
      minimize: process.env.NODE_ENV === "production" ? true : false,
      minimizer: process.env.NODE_ENV === "production" ? [
        new Terser({
          parallel: true,
          cache: true,
          sourceMap: true
        })
      ] : []
    }
  }
}