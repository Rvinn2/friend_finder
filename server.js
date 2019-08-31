// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


var friends = [
  {
      name: "Woody",
      photo: "https://images.app.goo.gl/Z9QhD5pqCycLkan48",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "Person9",
      photo: "img.https://images.app.goo.gl/Z9QhD5pqCycLkan48",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "Person7",
      photo: "https://images.app.goo.gl/Z9QhD5pqCycLkan48",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "person6",
      photo: "https://images.app.goo.gl/Z9QhD5pqCycLkan48",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  {
      name: "Person5",
      photo: "https://images.app.goo.gl/Z9QhD5pqCycLkan48",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "person3",
      photo: "https://images.app.goo.gl/Z9QhD5pqCycLkan48",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  {
      name: "person4",
      photo: "https://images.app.goo.gl/Z9QhD5pqCycLkan48",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  ];
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "/app/public/home.html"));
});

app.get("/survey",function(req, res){
  res.sendFile(path.join(__dirname + "/app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  