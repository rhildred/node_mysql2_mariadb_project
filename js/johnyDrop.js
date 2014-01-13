var mysql = require('mysql2-openshift'), connection = mysql.createConnection({
	user : 'root',
	database : 'test2'
});
module.exports.johnyDrop = function(req, res, next, callback) {
	var sName = req.param('q') || '%';
	var sSQL = "SELECT * FROM students WHERE name like CONCAT('%', ?, '%')";
	console.log(sSQL);
	connection.query(sSQL, [sName], function(err, rows) {
		if (err && callback)
			callback(err);
		// now we want the rows
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(rows));
		if (callback)
			callback(null);
	});

};