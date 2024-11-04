/*
 * @Author: Du.Kang banshee1115@163.com
 * @Date: 2024-11-04 15:35:23
 * @LastEditors: Du.Kang banshee1115@163.com
 * @LastEditTime: 2024-11-04 15:38:33
 * @FilePath: \node-learning\chapter-3\tcpClient.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var net = require("net");

var client = new net.Socket();

client.connect("8124", "localhost", function () {
  console.log("connected to server");
  client.write("who needs a browser to communicate?");
});

process.stdin.resume();

process.stdin.on("data", function (data) {
  client.write(data);
});

client.on("data", function (data) {
  console.log(data);
});

client.on("close", function () {
  console.log("connection is closed");
});
