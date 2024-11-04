/*
 * @Author: Du.Kang banshee1115@163.com
 * @Date: 2024-11-04 10:10:36
 * @LastEditors: Du.Kang banshee1115@163.com
 * @LastEditTime: 2024-11-04 10:10:47
 * @FilePath: \node-learning\chapter-1\first.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.end("hello world!\n");
  })
  .listen(8124);

console.log("server running on 8124");
