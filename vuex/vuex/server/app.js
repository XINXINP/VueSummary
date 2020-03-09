/*
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-03-09 11:33:44
 * @LastEditTime: 2020-03-09 11:38:15
 */
const koa = require("./wl");
const app = new koa();
app.use((req, res) => {
  res.writeHead(200);
  res.end("555");
});
app.listen(3000, () => {
  console.log("监听端口3000");
});
