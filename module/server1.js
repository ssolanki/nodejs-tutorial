var connect = require('connect');
var http = require('http');

// app wil handle how request will be handled
var app = connect();

function profile(request,response){
	console.log("User requested for profile!");
}
function forum(request,response){
	console.log("User requested for forum!");
}
app.use('/profile',profile);
app.use('/forum',forum);


http.createServer(app).listen(8888);
console.log('listening at the port 8888...');