const { knex } = require("../utilise");

module.exports = async (req, res) => {
  try {
    const products = await knex("products")
      .select("name", "price", "id")
      .then((products) => {
        res.json(products);
      });
  } catch (error) {
    console.error("database error:", error);
    res.status(500).json({
      message: error.message,
      date: new Date(),
    });
  }
};
