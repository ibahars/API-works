const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const productRouter = require("./productRouter");
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the web page!");
});
