// get the client
const mysql = require('mysql2/promise');
require('dotenv').config()

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  database: process.env.DATABASE,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_DB
});

module.exports = pool;