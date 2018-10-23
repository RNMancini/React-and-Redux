var express = require('express')
var app = express()

app.get('/name', function (req, res) {
    res.send("Rebecca Mancini");
});

 app.get('/:route', function(req, res) {
     res.send('The route you specified is ' + req.params.id);
 });
 
app.listen(8080);