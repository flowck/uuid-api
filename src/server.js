const http = require("http");
const app = require("./application");

const PORT = 4000 || process.env.PORT;
http.createServer(app).listen(PORT, () => {
  console.log("The UUID server is up and running");
});
