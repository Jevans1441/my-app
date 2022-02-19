const { application } = require("express");
const express = require("express");
const server = express();
const hostname = "127.0.0.1";
const port = 8080;

server.get("/heartbeat", (req, res) => {
  res.json({
    is: "json",
  });
});

server.listen(port, hostname, function () {
  console.log(`server is listening at port ${port} `);
});
