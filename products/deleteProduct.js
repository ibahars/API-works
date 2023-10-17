//knex connection
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
    .del()
    .then(() => {
      res.send("product deleted succesfully!");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};
