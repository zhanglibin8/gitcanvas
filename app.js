'use strict';

var port = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.engine('jade', require('jade').__express);
app.set('views', 'web/views');

app.use(express.static(__dirname + '/web/public'));
app.use(app.router);
app.get('/', function(req, res){
    res.render('app.jade');
});
app.listen(port);

console.log('express listening on port %s', port);
