var http = require('http'),
fs=require('fs');


function serveStaticFile(res, path, contentType, responseCode) {
	if(!responseCode) responseCode = 200;
	
	fs.readFile(__dirname + path, function(err,data) {
		if(err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end('500 - Internal Error');
		 }
		else{
			res.writeHead(responseCode,{ 'Content-Type': contentType });
			res.end(data);

		}
	});
}

var port = 8080;
http.createServer(handleRequest).listen(port);
console.log('Server started on localhost:8080; press Ctrl-C to terminate....');

function handleRequest(req, res) {
var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	if (path === '/index' || path === '') {
		serveStaticFile(res, '/public/index.html', 'text/html',200);
		console.log(Date(),req.url, 200,"OK");
	} 
	else if (path === '/about') {
		serveStaticFile(res, '/public/about.html', 'text/html',200);
		console.log(Date(),req.url, 200,"OK");
	} 
	else if (path === '/me') {
		serveStaticFile(res, '/public/about.html', 'text/html', 301);
		console.log(Date(),req.url, 301,"page has permanently moved");
	}
	else if (path === '/img/image1.png') {
		serveStaticFile(res, '/public/img/image1.png', 'image/png', 200);
		console.log(Date(),req.url, 200,"OK");
	} 
	else if (path === '/img/image2.png') {
		serveStaticFile(res, '/public/img/image2.png', 'image/png', 200);
		console.log(Date(),req.url, 200,"OK");
	}  
	else if (path === '/css/base.css') {
		serveStaticFile(res, '/public/css/base.css', 'text/css', 200);
		console.log(Date(),req.url, 200,"OK");
	} 
	else {
		serveStaticFile(res, '/public/404.html', 'text/html', 404);
		console.log(Date(),req.url,404,"Page not found");
	}
}