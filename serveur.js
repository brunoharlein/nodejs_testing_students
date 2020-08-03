// create small server

// call to a library "http"
let http = require('http');

// To retrieve the page requested by the visitor
let url = require("url");

// The http variable represents a JavaScript object that will allow us to launch a web server.
// We call the createServer () function contained in the http object and we register this server in the server variable
let server = http.createServer(function(req, res) {
  let page = url.parse(req.url).pathname;
  console.log(page);
  res.writeHead(200, {"Content-Type": "text/plain"});
  if (page == '/') {
    res.write("Vous êtes sur la main page");
  }
  else if (page == '/page1') {
    res.write("Vous êtes sur la page 1");
  }
  else if (page == '/page1/h1/p') {
    res.write("vous voila dans une page avec un h1 et un p");
  }
  res.end();
});
// lunch from port 8080
server.listen(8080);
