const router = require('express').Router();
const connection = require('../pool');

router.get('/getAll', (req, res) => {
	let sql = `
    SELECT *
    FROM Product
  `;

	connection.query(sql, function (error, results) {
		if (error) {
			throw error;
		}

		res.send(results);
	});
});

module.exports = router;
