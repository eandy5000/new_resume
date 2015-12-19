var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    console.log('index router get' );
    res.send("res from get home in index");
    next();
});

module.exports = router;