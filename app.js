const http = require("http");
const port = 4001;

const server = http.createServer(function (req, res) {
  res.end("Hello World");
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});
