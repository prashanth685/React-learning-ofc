const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world");
});

server.listen(2000, "localhost", () => {
  console.log("Server running at http://localhost:2000");
});
