var mysql = require('mysql2-openshift'), connection = mysql.createConnection({
	user : 'root',
	database : 'swag'
});

module.exports.categories = function(req, res, next, callback) {
	var sSQL = "SELECT * FROM categories";
	connection.query(sSQL, [], function(err, rows) {
		if (err && callback)
			callback(err);
		// now we want the rows
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(rows));
		if (callback)
			callback(null);
	});

}

module.exports.category = function(req, res, next, callback) {
	var nId = req.param('category');
	var sSQL = "SELECT * FROM categories WHERE id = ?";
	connection.query(sSQL, [nId], function(err, rows) {
		if (err && callback)
			callback(err);
		// now we want the rows
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(rows));
		if (callback)
			callback(null);
	});

}

module.exports.products = function(req, res, next, callback) {
	var nId = req.param('category');
	var sSQL = "SELECT a.*, b.url FROM products AS a, images AS b WHERE a.id = b.item_id AND b.sequence_id = 1 AND category_id = ?";
	connection.query(sSQL, [nId], function(err, rows) {
		if (err && callback)
			callback(err);
		// now we want the rows
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(rows));
		if (callback)
			callback(null);
	});

}

module.exports.product = function(req, res, next, callback) {
	var nId = req.param('product');
	var sSQL = "SELECT * FROM products WHERE id = ?";
	connection.query(sSQL, [nId], function(err, rows) {
		if (err && callback)
			callback(err);
		// now we want the rows
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(rows));
		if (callback)
			callback(null);
	});

}

module.exports.images = function(req, res, next, callback) {
	var nId = req.param('product');
	var sSQL = "SELECT * FROM images WHERE item_id = ?";
	connection.query(sSQL, [nId], function(err, rows) {
		if (err && callback)
			callback(err);
		// now we want the rows
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(rows));
		if (callback)
			callback(null);
	});

}
