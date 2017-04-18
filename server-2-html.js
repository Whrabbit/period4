var http = require('http');

function onRequest(request, response){
	console.log('Request');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>potato</h1><p>nom</p>');
	response.end();
}
http.createServer(onRequest).listen(3000);

console.log('The server is on 3000');