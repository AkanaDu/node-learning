var http = require("http");
// 增加文件系统模块fs
var fs = require("fs");

// 输出数字序列
function writeNumbers(res) {
  var counter = 0;
  for (var i = 0; i < 100; i++) {
    counter++;
    res.write(counter.toString() + "\n");
  }
}

http
  .createServer(function (req, res) {
    var query = require("url").parse(req.url).query;
    var app = require("querystring").parse(query).file + ".txt";

    res.writeHead(200, {
      "content-type": "text/plain",
    });

    writeNumbers(res);

    setTimeout(function () {
      console.log("opening " + app);

      // 打开first.js文件，并读取文件内容
      fs.readFile(app, "utf-8", function (err, data) {
        if (err) {
          res.write("cound not find or open file for reading\n");
        } else {
          res.write(data);
        }
        res.end();
      });
    }, 2000);
  })
  .listen(8124);

console.log("server running on 8124");
