const http = require("http");
const app = require("./application");

const PORT = process.env.PORT || 4000;
http.createServer(app).listen(PORT, () => {
  console.log("The UUID server is up and running at: ", PORT);
});
