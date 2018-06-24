var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db-cineteca.c4w6olsewc3z.us-east-2.rds.amazonaws.com',
  user     : 'salvatore',
  password : 'aprano1983',
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