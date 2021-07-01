const { createPool } = require("mysql");
const db = createPool({
  port: 3306,
  host: "d_carlo-mysql",
  user: "root",
  password: "123",
  database: "d_carlo_db",
  connectionLimit: 999,
});
module.exports = db;