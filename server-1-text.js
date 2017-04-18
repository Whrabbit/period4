var http = require('http');

function onRequest(request, response){
	console.log('There was a request.');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World');
	response.write('potato');
	response.end();
}

http.createServer(onRequest).listen(3000);

console.log('De server is op port 3000');