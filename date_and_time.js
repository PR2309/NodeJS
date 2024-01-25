// Import the http and url modules
const http = require('http');
const url = require('url');

// Define the server port
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Check if the requested path is "/"
  if (parsedUrl.pathname === '/') {
    // Set the response headers
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Create the HTML response
    const htmlResponse = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Date and Time Server</title>
        </head>
        <body>
          <h1>Current Date and Time:</h1>
          <p id="date-time"></p>
          <script>
            // Update the date and time every second
            setInterval(() => {
              const now = new Date();
              const dateTimeString = now.toLocaleString();
              document.getElementById('date-time').innerText = dateTimeString;
            }, 1000);
          </script>
        </body>
      </html>
    `;

    // Send the HTML response
    res.end(htmlResponse);
  } else {
    // If the requested path is not "/", return a 404 Not Found error
    res.writeHead(404);
    res.end('Not Found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});