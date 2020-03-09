/*
 * @Descripttion: 🐉koa的response.js
 * @Author: xinxin
 * @Date: 2020-03-09 11:43:07
 * @LastEditTime: 2020-03-09 11:47:22
 */
module.exports = {
  get body() {
    return this._body;
  },
  set body(val) {
    this._body = val;
  }
};
