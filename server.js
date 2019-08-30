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
      name: "person13",
      photo: "img.png",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "Person9",
      photo: "img.png",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "Person7",
      photo: "img.png",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "person6",
      photo: "img.png",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  {
      name: "Person5",
      photo: "img.png",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "person3",
      photo: "img.png",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  {
      name: "person4",
      photo: "img.png",
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
  