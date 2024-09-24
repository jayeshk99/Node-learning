const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // plain text response
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end("Hello World ---- !");

  // json response
  const data = {
    langName: "javascript",
    runtime: "nodejs",
  };
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify(data));

  // html response
  const html = fs.readFileSync("index.html", "utf-8");
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end(html);

  // html response in STREAM
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream("./index.html").pipe(res);
});

server.listen(3001, () => {
  console.log("Server running on port 3001 ------");
});
