// Dependencies
const express = require("express");
const uuid = require("uuidv4");
const cors = require("cors");

// Run the server application
const app = express();

// Enable cors of course
app.use(cors);

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
  const uuids = Array.from(
    {
      length: req.params.n
    },
    () => ({
      uuid: uuid(),
      createdAt: new Date()
    })
  );

  // Send a the uuids
  res.json({
    uuids,
    version: 4
  });
});

// Allow testing libraries
module.exports = app;
