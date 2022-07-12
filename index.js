const express = require("express");
const app = express();
const port = 3000;
const connection = require("./config/connection");
const routes = require("./routes");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
