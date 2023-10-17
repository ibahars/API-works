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
  const newProduct = req.body;
  const { id, name, price } = newProduct;

  knex("products")
    .insert({ id, name, price })
    .then(() => {
      res.send("products added succesfully!");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};
