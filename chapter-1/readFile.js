var http = require("http");
// 增加文件系统模块fs
var fs = require("fs");

http
  .createServer(function (req, res) {
    // 打开first.js文件，并读取文件内容
    fs.readFile("chapter-1/first.js", "utf-8", function (err, data) {
      res.writeHead(200, {
        "content-type": "text/plain",
      });
      if (err) {
        res.write("cound not find or open file for reading\n");
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(8124);

console.log("server running on 8124");
