require('dotenv').config()
const PORT = 8000;
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');


var connection = mysql.createConnection({
  host: process.env.AWS_HOST,
  port: process.env.AWS_PORT,
  user: process.env.AWS_USER,
  password: process.env.AWS_PASSWORD,
  database: process.env.AWS_DATABASE,
});

var app = express();
app.use(cors());

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log('Connected to database successfully.');
});

app.get('/', function (req, res) {});

app.get('/getAllProducts', function (req, res) {
  let sql = `
    SELECT *
    FROM Product
    ORDER BY Title
    LIMIT 12
  `;

  connection.query(sql, function (error, results) {
    if (error) {
      throw error;
    }

    res.send(results);
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));