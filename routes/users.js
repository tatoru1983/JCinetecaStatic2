var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '----',
  user     : 'salvatore',
  password : '----',
  database: 'cineteca'
});


exports.getUser = function(req, res) {
	var user = req.body;
	
	connection.query('SELECT * FROM USERS WHERE USERNAME = ? AND PASSWORD = md5(?)', [user.username, user.password], function(err, results) {
	  if (err) throw err;
	  
	  if (results != '')
	  {
		  var response = { success: true };
		  res.send(response);
	  }
	  else
      {
		  var response = { error: '' };
	      res.send(response);
	  }	
	});
};
