console.log("HTML Route Connected");

var path = require("path");

function htmlRoutes(app){



    // VIEW HTML HOME PAGE_______________

    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });


    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });


}
module.exports = htmlRoutes;