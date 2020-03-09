/*
 * @Descripttion: 🐉context.js
 * @Author: xinxin
 * @Date: 2020-03-09 11:42:05
 * @LastEditTime: 2020-03-09 14:18:25
 */
module.exports = {
  get url() {
    return this.request.url;
  },
  get body() {
    return this.response.body;
  },
  set body(val) {
    this.response.body = val;
  }
};
