// Dependencies
const express = require("express");
const uuid = require("uuidv4");

// Run the server application
const app = express();

// Get a single uuid
app.get("/", (req, res) => {
  res.json({
    uuid: uuid(),
    version: 4,
    createdAt: new Date()
  });
});

// Get a n uuid
app.get("/:n", (req, res) => {
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

// Listen it to a port
const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("UUID server up and running");
});
