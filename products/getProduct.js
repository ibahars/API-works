// const { knex } = require("../utilise");
// const { getProductById } = require("../productService");

// module.exports = async (req, res) => {
//   const productId = req.params.id;
//   const { name, price } = req.body;
//   try {
//     const product = await getProductById(productId);
//   } catch (error) {
//     console.error("database error:", error);
//     res.status(500).json({
//       message: error.message,
//       date: new Date(),
//     });
//   }
// };
