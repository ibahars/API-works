module.exports = (req, res) => {
  res.send(
    knex("products")
      .select("name", "price", "id")
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        console.error("database error:", error);
        res.status(500).send("database error");
      })
  );
};
