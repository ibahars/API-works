//express connection
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
app.use(bodyParser.json());

//knex connection
const { body, validationResult } = require("express-validator");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456789",
    database: "orders",
  },
});

// requiring the exported modules
const welcomeProducts = require("./products/welcomeProducts");
const getProducts = require("./products/getProducts");
const getProduct = require("./products/getProduct");
const postProduct = require("./products/postProduct");
const updateProduct = require("./products/updateProduct");
const deleteProduct = require("./products/deleteProduct");

//openning page
app.get("/", welcomeProducts);

//getting all data
app.get("/products", getProducts);

//getting one data with id
app.get("/products/:id", getProduct);

//adding data
app.post("/products", postProduct);

//data update
app.put("/products/:id", updateProduct);

//data deletion
app.delete("/products/:id", deleteProduct);

//running server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
