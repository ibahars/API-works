const { knex } = require("../utilise");

module.exports = (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  const { name, price } = updatedProduct;

  knex("products")
    .where({ id: productId })
    .update({ name, price })
    .then(() => {
      res.send("Products updated succesfully!");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};
