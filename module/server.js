var http = require('http'); // http server
var fs = require('fs'); //require file system module for files

// 404 request
function send404Reqeust(response){
	response.writeHead(404,{"Content-Type":"text/plain"});
	response.write("Error:404 Page not found");
	response.end();
}

// Handle a user request
function onRequest(request,response){
	if(request.method=="GET" && request.url == "/"){
		response.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream("./index.html").pipe(response);		
	}
	else{
		send404Reqeust(response);
	}
	// sendTextResp();

}
function sendTextResp(){
	 console.log('a user had made request ' + request.url);
	 response.writeHead(200,{"Context-Type":"text/plain"});
	 response.write("Here is some data");
	 response.end();
}
http.createServer(onRequest).listen(2000);
console.log('serve is listing on port 2000...');