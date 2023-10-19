const { knex } = require("./utilise");

const getProductById = (id) => {
  knex("products").where({ id: productId }).select("name", "price");
};

module.exports = {
  getProductById,
};
