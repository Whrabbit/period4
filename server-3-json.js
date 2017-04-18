var http = require('http');

http.createServer(function(request, response){
    console.log(JSON.stringify(request.headers));
    response.writeHead(200,{'Content-type': 'text/json'});
    var exampleArray = ["item1", "item2"];
    var exampleObject ={
        item1: "item1val",
        item2: "item2val"
    };
    var json = JSON.stringify({
        anObject: exampleObject,
        anArray: exampleArray,
        another: "item"
    });
    response.end(json);
}).listen(3000);

console.log("De server is op port 3000");