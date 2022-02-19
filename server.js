require("dotenv").config();
const express = require("express");
const path = require("path");
const server = express();
const hostname = "127.0.0.1";
const { PORT } = process.env;

server.use(express.static(path.resolve(__dirname + "/react-ui/build")));

server.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./react-ui/build", "index.html"));
});

server.listen(PORT, hostname, () => {
  console.log(`server is listening at ${hostname}:${PORT}`);
});