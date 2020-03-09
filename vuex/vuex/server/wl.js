/*
 * @Descripttion: 🐉实现一个构造函数
 * @Author: xinxin
 * @Date: 2020-03-09 11:28:16
 * @LastEditTime: 2020-03-09 14:26:56
 */

const http = require("http");
const context = require("./context");
const request = require("./request");
const response = require("./response");
class wl {
  listen(...args) {
    const server = http.createServer((req, res) => {
      //创建上下文
      let ctx = this.createContext(req, res);
      //响应
      res.end(ctx.body);
      this.callback(req, res);
    });
    server.listen(...args);
  }
  use(callback) {
    this.callback = callback;
  }
  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);
    ctx.req = ctx.request = req;
    ctx.res = ctx.response = res;
    return ctx;
  }
}
module.exports = wl;
