const { knex } = require("../utilise");

module.exports = (req, res) => {
  const productId = req.params.id;

  knex("products")
    .where({ id: productId })
    .del()
    .then(() => {
      res.send("product deleted succesfully!");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};
