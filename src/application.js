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

// Listen it to a port
const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("UUID server up and running");
});
