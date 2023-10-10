const express = require("express");
const router = express.Router(); //buradaki router express ile ilgili.

router.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
