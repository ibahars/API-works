const express = require("express");
const { body, validationResult } = require("express-validator");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//knex bağlantısı
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

//tanımladığımız portta server çalışmasını sağlıyoruz
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// read.js dosyasını çağırıyoruz.
const router2 = require("./read");
app.get("/get-products", router2); // Bu satırı değiştirdik.

// Diğer yolları da ekleyebilirsiniz
app.get("/get-products", (req, res) => {
  // Burada başka bir GET işlemi tanımlayabilirsiniz.
});

// Post, Put, vb. işlemleri de ekleyebilirsiniz.
