const PORT = 8000;
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var connection = mysql.createConnection({
  host: 'teaching-future-leaders.copur53zxbbu.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'BrutusEchoCade2022',
  database: 'sys',
});

var app = express();
app.use(cors());

connection.connect((error) => {
  if (error) {
    throw error;
  }
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