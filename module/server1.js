var connect = require('connect');
var http = require('http');

// app wil handle how request will be handled
var app = connect();

function doFirst(request,response,next){
	console.log("Bacon");
	// this are function where u can check like whether have a permission etc.
	next(); // ask for next proc in stack *which is executing doSecond*
}
function doSecond(request,response,next){
	console.log("Jack");
	next();
}
// middleware
app.use(doFirst);
console.log('starting exec of doSecond function...');
app.use(doSecond);

http.createServer(app).listen(8888);
console.log('listening at the port 8888...');