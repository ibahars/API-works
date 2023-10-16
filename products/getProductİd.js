module.exports = (req, res) => {
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
};
