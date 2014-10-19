var express = require('express');
var app = express();
var handlebars = require('express3-handlebars');
app.engine('handlebars', handlebars({ defaultLayout:'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));


app.get('/', function(req, res){
	res.render('index',{
		headers: [
			'host: ' + req.headers['host'],
			'connection: ' + req.headers['connection'],
			'accept: ' + req.headers['accept'],
			'user-agent: ' + req.headers['user-agent'],
			'referer: ' + req.headers['referer'],
			'accept-encoding: ' + req.headers['accept-encoding'],
			'accept-language: ' + req.headers['accept-language']
		]
	});
});

app.get('/about', function(req, res){
	res.render('about');
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

var port = 3000;
app.listen(port);
console.log('Express started on http://localhost:', port+ '; press Ctrl-C to terminate.' );









	
