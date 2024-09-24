let http = require("http");
let fs = require("fs");

const server = http.createServer((req, res) => {
  let name = "Jayesh";
  let html = fs.readFileSync(__dirname + "./template.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(3005, () => {
  console.log("Server listening on port ... 3005");
});
