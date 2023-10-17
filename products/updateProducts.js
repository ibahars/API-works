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

module.exports = (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  const { name, price } = updatedProduct;

  knex("products")
    .where({ id: productId })
    .update({ name, price })
    .then(() => {
      res.send("products updated succesfully!");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};
