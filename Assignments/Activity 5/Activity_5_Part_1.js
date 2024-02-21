const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true); // The second argument true means the query string is parsed into an object

  switch (parsedUrl.pathname) {
    case "/":
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Hello, World!");
      break;
    case "/about":
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("About page");
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("404 Not Found");
      break;
  }

  console.log(`Path: ${parsedUrl.pathname}`);
  console.log(`Query: ${JSON.stringify(parsedUrl.query)}`);

  response.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});