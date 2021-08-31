/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-23 18:44:17
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-30 19:59:58
 */
const isDev = process.env.NODE_ENV === 'development';
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const config = isDev ? devConfig : prodConfig;

module.exports = {
  ...config,
};
