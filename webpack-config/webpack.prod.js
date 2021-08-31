/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:16
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-31 18:14:39
 */
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const baseConfig = require('./webpack.base');

const config = {
  plugins: [
    // // 打包时不清除dll文件夹下的文件，因为只有在dll中的文件改变了才会重新生成dll
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['**/*', '!dll/*'],
    //   cleanAfterEveryBuildPatterns: ['!dll/*'],
    //   verbose: true,
    //   dry: false,
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css', // 将css放到打包后的单独目录下
    }),
    new Webpack.DllReferencePlugin({
      manifest: require(path.resolve(__dirname, './dist/dll/vendor-manifest')),
      // manifest文件所在的绝对路径
      context: path.resolve(__dirname, 'dist', 'dll'),
    }),
    new HtmlWebpackTagsPlugin({
      tags: ['dll/vendor.dll.js'],
    }),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      '...',
      new CssMinimizerPlugin(),
      new ParallelUglifyPlugin({
        cacheDir: '.cache/',
        uglifyJS: {
          output: {
            comments: false, //是否保留代码中的注释，默认为保留
          },
          warnings: true, //是否在UglifyJS删除没有用到的代码时输出警告信息，默认为false
          compress: {
            drop_console: true, //是否删除代码中所有的console语句，默认为false
            collapse_vars: true, //是否内嵌虽然已经定义了，但是只用到一次的变量， 默认值false
            reduce_vars: true, //是否提取出现了多次但是没有定义成变量去引用的静态值，默认为false
          },
        },
      }),
    ],
  },
};

module.exports = merge(baseConfig, config);
