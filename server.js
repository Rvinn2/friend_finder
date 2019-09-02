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
      name: "MJ",
      photo: "https://images.app.goo.gl/pUuFJiztZJaRwRXQ9",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "Tom B.",
      photo: "https://images.app.goo.gl/AbMsh4xMELpff9Ak6",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "Lebron James",
      photo: "https://images.app.goo.gl/QaprFQySAgxw4iNt9",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "Kobe Bryant",
      photo: "https://images.app.goo.gl/ThNaRcM8UvkwMeP59",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  {
      name: "Russell Wilson",
      photo: "https://images.app.goo.gl/tZ19acA62ajXk7eeA",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  
  {
      name: "Matt Ryan",
      photo: "https://images.app.goo.gl/9iLfMPzFWC9ezKSj8",
      scores: [5,1,4,4,5,1,2,5,4,4]
  },
  {
      name: "Barak Obama",
      photo: "https://images.app.goo.gl/KhN67RVZKnnPp9Ro7",
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
  