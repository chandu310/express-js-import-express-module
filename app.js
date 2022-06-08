const expres = require("express");

const app = expres();
app.get("/", (request, response) => {
  response.send("Express JS");
});
module.exports = app;
