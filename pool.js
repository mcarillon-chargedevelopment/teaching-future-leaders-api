require('dotenv').config()
const mysql = require('mysql');

var pool = mysql.createPool({
  host: process.env.AWS_HOST,
  port: process.env.AWS_PORT,
  user: process.env.AWS_USER,
  password: process.env.AWS_PASSWORD,
  database: process.env.AWS_DATABASE,
});

module.exports = pool;