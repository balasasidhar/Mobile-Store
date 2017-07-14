var express = require('express');
var fs = require ("fs");
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    fs.readFile("./public/index.html",function (err, result) {
        res.write(result);
    });

});

app.listen(3000);