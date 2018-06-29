var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("home"); 
});

app.get("/results", function(req, res) {
    var search = req.query.search;
    console.log(search);
    
    request("http://omdbapi.com/?s=" + search + "&apikey=thewdb", function(error, response, body) {
        if(!error && response.statusCode == 200) {
           var data = JSON.parse(body);
           res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Starting server..."); 
});