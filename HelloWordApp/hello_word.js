const http = require("http");
var m1 = require("./moduleHelloWorld");

const server = http.createServer();
server.on('request', (request, response) => {
    
    const {headers, method, url} = request;
    
    let body = [];
    
    
    
    if(url =='/echo' && method == 'POST'){

        request.on('error',(err) => {
            console.log(err);
        }).on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
            // renvoie toute la response
            const responseBody = {headers, method, url, body};
            response.write(JSON.stringify(body));
            response.end();            
        });
      
    } else {
        response.on('error', (err)=> {
            console.error(err);
        });

        response.writeHead(404, {'Content-Type': 'application/json'});
        response.write(JSON.stringify("Not Found"));
        response.end();        
       
    }
}).listen(8083);

console.log('server running localhost:8083');