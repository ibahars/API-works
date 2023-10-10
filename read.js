const express = require("express");
const router2 = express.Router(); //buradaki router express ile ilgili.

router2.get("/", (req, res) => {
  getProducts((error, products) => {
    if (error) {
      console.error("database error:", error);
      res.status(500).send("database error");
    } else {
      res.json(products);
    }
  });
});

module.exports = router2;
