//knex conneciton
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
  const { name, price } = req.body;
  knex("products")
    .where({ id: productId })
    .select("name", "price")
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error("database error", error);
      res.status(500).send("database error!");
    });
};
