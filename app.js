var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("https://hw13.onrender.com ");//  http://localhost:3000
  })
  .listen(port);