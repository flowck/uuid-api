// Dependencies
const express = require("express");
const uuid = require("uuidv4");

// Run the server application
const app = express();

// Get a single uuid
app.get("/api/", (req, res) => {
  res.json({
    uuid: uuid(),
    version: 4,
    createdAt: new Date()
  });
});

// Get a n uuid
app.get("/api/:n", (req, res) => {
  // Limit the response to 1000 per call
  if (req.params.n > 1000) {
    return res.status(400).json({
      message: "Please, 1000 uuids at a time"
    });
  }

  // Generate n uuids
  let uuids = [];
  for (let i = 0; i < req.params.n; i++) {
    uuids.push({
      uuid: uuid(),
      createdAt: new Date()
    });
  }

  // Send a the uuids
  res.json({
    uuids,
    version: 4
  });
});

// Allow testing libraries
module.exports = app;
