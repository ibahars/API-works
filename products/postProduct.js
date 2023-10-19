const { knex } = require("../utilise");

module.exports = (req, res) => {
  const newProduct = req.body;
  const { name, price } = newProduct;

  knex("products")
    .insert({ name, price })
    .then(() => {
      res.send("Products added succesfully!");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};
