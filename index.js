const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
app.use(bodyParser.json());

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

const welcomeProducts = require("./products/welcomeProducts");
const getProducts = require("./products/getProducts");
const getProduct = require("./products/getProductİd");
const postProduct = require("./products/postProducts");

//açılış sayfası
app.get("/", welcomeProducts);

//verileri getirme
app.get("/products", getProducts);

//spesifik bir veri getirme
app.get("/products/:id", getProduct);

//veri ekleme
app.post("/products", postProduct);
//Port dinlemeye başlanıyor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
