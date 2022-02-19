// libraries
require("dotenv").config();
const express = require("express");
const path = require("path");
const Geocodio = require("geocodio-library-node");
const { PORT, API_KEY } = process.env;

// server path
const hostname = "127.0.0.1";

// instantiations
const geocoder = new Geocodio(API_KEY);
const server = express();

// middleware
server.use(express.static(path.resolve(__dirname + "/react-ui/build")));
server.use(express.json());

// endpoints
server.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

server.post("/location", (req, res) => {
  const { address } = req.body;

  geocoder
    .geocode(address)
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      res.json({ err });
    });
});

server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./react-ui/build", "index.html"));
});

server.listen(PORT, hostname, () => {
  console.log(`server is listening at ${hostname}:${PORT}`);
});
