var friendsData = require("../data/friends");
console.log(friendsData);
module.exports = function(app) {
	//whenever the user goes to the api/tables url go ahead and display the tableData in json format
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
		console.log("friendsData[0].scores[0]: " + friendsData[0].scores[0]);

	});

	app.post('/api/friends', function(req, res) {
		console.log(req.body);

		var bestMatch = {
      		name: "",
      		img: "",
      		difference: 20
    	};

		var newFriend = req.body;
	    var newImg = req.body.newImg;
	    var newName = req.body.newName;
	    var newScores = req.body.scores;

	    console.log(newFriend);
	    
  	});

} 

