var express = require("express");
var app = express();
var request = require("express");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("home"); 
});