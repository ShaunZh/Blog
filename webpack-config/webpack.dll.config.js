/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-27 18:33:17
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-31 18:23:26
 */
const Webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist', 'dll'),
    filename: '[name].dll.js',
    // 表示将该文件暴露为一个library供外部使用，该字段须与DllPlugin中的name字段保持一致
    library: '[name]_dll',
  },
  plugins: [
    // 生成dll时，先清除output中的path路径下的文件，注：不配置CleanWebpackPlugin，则默认清除output
    // 此处没有使用webpack5的output.clean清除output目录，是因为会将DllPlugin生成的manifest文件清除，未找到原因
    new CleanWebpackPlugin(),
    new Webpack.DllPlugin({
      // 请求的manifest的上下文，它与dllReferencePlugin中的context不同,
      // dllReferencePlugin中的context需要填写manifest的绝对路径
      context: __dirname,
      //name和output中的library一致
      name: '[name]_dll',
      // manifest.json的生成路径
      path: path.resolve(__dirname, 'dist', 'dll', '[name]-manifest.json'),
    }),
  ],
};
