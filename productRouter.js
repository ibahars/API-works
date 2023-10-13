const express = require("express");
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
const router = express.Router();

router.get("/", (req, res) => {
  knex("products")
    .select("name", "price", "id")
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error("database error:", error);
      res.status(500).send("database error");
    });
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  knex("products")
    .where({ id: productId })
    .select("price")
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error("database error", error);
      res.status(500).send("database error!");
    });
});

router.post(
  "/",
  [body("price").notEmpty().isFloat(), body("name").notEmpty().isString()],
  (req, res) => {
    const { name, price } = req.body;
    const parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice)) {
      return res.status(400).send("Price must be a valid number.");
    }

    knex("products")
      .insert({ name, price: parsedPrice })
      .then(() => {
        console.log("Product added successfully!");
        res.send("Product added successfully!");
      })
      .catch((err) => {
        console.log("Problem: " + err);
        res.status(500).send("An error occurred.");
      });
  }
);

module.exports = router;
