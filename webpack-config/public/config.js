/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-23 19:54:00
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-23 19:55:12
 */
module.exports = {
  dev: {
    template: "hello",
    header: false,
    footer: false,
  },
  build: {
    template: "world hello",
    header: true,
    footer: false,
  },
};
