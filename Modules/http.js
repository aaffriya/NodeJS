var http = require("http"); // emport

// Create Server
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // First arg for Status (200 for OK, 404 for not found, 500 for server error)
    // Second arg for Content type 
    res.write("<h1 style = 'text-align : center;'>Welcome To My Website</h1>"); // send reponse to clint with HTML, CSS elements
    res.write("<p style = 'text-align : center;'> Hello Wolrd!</p>");
    console.log(req); // receive request by clint with function(res.url)
    console.log(req.url); //res.url is URL request function
}).listen(3000);
