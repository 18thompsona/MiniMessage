const express = require("express");
const path = require("node:path");

const indexRouter = require("./Public/routes/indexRouter")
const newMessageRouter = require("./Public/routes/newMessageRouter")

const app = express();

app.set("views", path.join(__dirname, "Public/views"));
app.set("view engine", "ejs");


app.use("/new", newMessageRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
