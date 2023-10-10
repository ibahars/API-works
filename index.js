const express = require("express"); //express bağlantısı
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

//burada get isimli dosyayı çağırıyoruz.
const routes1 = require("./get");
app.use("/", routes1);

const router2 = require("./read");
app.use("/products", router2);

const router3 = require("./readId");
app.use("/products:3", router3);
