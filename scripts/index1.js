/*const fs = require("fs"); 
  
// STEP 1: Reading JSON file 
const users = require("./users"); 
console.log(users[0].language[0]);*/
   
// Defining new user 
/*let user = { 
    name: "New User", 
    age: 30, 
    language: ["PHP", "Go", "JavaScript"] 
}; 
   
// STEP 2: Adding new data to users object 
users.push(user); 
   
// STEP 3: Writing to a file 
fs.writeFile("users.json", JSON.stringify(users), err => { 
     
    // Checking for errors 
    if (err) throw err;  
   
    console.log("Done writing"); // Success 
}); */

/*var http = require('http');
var fs = require("fs");
 
http.createServer(function(request, response) {
	const fs = require("fs"); 
   
// Read users.json file 
	fs.readFile("users.json", function(err, data) { 
	      
	    // Check for errors 
	    if (err) throw err; 
	   
	    // Converting to JSON 
	    const users = JSON.parse(data); 
	      
	    console.log(users); // Print users  
	}); 
}).listen(3000);*/

var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("This is Test Message.");  
            response.end();  
            break;  
        case '/index.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        case '/next.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);
                    response.end();  
                }  
            });  
            break;  
        default:  
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();  
            break;  
    }  
});  
server.listen(8080);