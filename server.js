var http = require('http');
var contact = require('./contact');

http.createServer(function(request, response){
    console.log(JSON.stringify(request.headers));
    response.writeHead(200,{'Content-type': 'application/json'});
    
    response.end(JSON.stringify(contact.i18l('uk')));
    
}).listen(3000);

console.log("De server is op port 3000");