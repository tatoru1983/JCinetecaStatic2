var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '----',
  user     : 'salvatore',
  password : '----',
  database: 'cineteca'
});

// POST

exports.getRatingsByID = function(req, res) {
	var imdbid = req.params.imdbid;
	var query = 'SELECT * FROM FILM_RATING WHERE IMDBID = ? ';
	connection.query(query,
	[imdbid], function(err, results) {
	  if (err) throw err;
		res.send(results);
	});
};
