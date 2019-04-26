/**
 * application.js
 */

// Dependencies
const express = require("express");
const uuid = require("uuidv4");
const cors = require("cors");
const compression = require("compression");

// Run the server application
const app = express();

/**
 * API configurations
 */

// Enable compression
app.use(compression());
// Enable cors for external services to consume this api
app.use(cors());

/**
 * Get a single uuid
 */
app.get("/api/uuids", (req, res) => {
  res.json({
    uuid: uuid(),
    version: 4,
    createdAt: new Date()
  });
});

/**
 * Get a single uuid
 * @param {number} n
 */
app.get("/api/uuids/:n", (req, res) => {
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

  res.json({
    uuids,
    version: 4
  });
});

app.get("*", (req, res) => {
  res.json({ message: "Route not found" });
});

module.exports = app;
