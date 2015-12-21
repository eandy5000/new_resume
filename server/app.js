
var express = require("express");
var app = express();
var path = require('path');

app.set("port", process.env.PORT || 3000);

app.get("/*", function(req,res,next){
    console.log("Here is the asset I needs: " , req.params);
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});