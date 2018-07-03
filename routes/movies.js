var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db-cineteca.c4w6olsewc3z.us-east-2.rds.amazonaws.com',
  user     : 'salvatore',
  password : 'aprano1983',
  database: 'cineteca'
});

// POST
exports.getMovies = function(req, res) {
	var filter = req.body;
	var query = 'SELECT * FROM FILM WHERE ('+filter.dvdNull+' IS NULL OR DVD = \''+filter.dvdNotNull+'\') AND (\''+filter.titleNull+'\' IS NULL OR UPPER(TITLE) LIKE \''+filter.titleNotNull+'\' OR UPPER(TITLE_ITA) LIKE \''+filter.titleNotNull+'\')';
	connection.query(query,
	[], function(err, results) {
	  if (err) throw err;
		res.send(results);
	});
};

exports.getMovieByID = function(req, res) {
	var imdbid = req.params.imdbid;
	var query = 'SELECT * FROM FILM WHERE IMDBID = ? ';
	connection.query(query,
	[imdbid], function(err, results) {
	  if (err) throw err;
		res.send(results);
	});
};