const http = require('http');
const port = 8080;

const app = http.createServer((req, res) => {
  res.writeHead(200, 'Ok', {
    'Content-Type': 'text/plain'
  });
  res.write('Hello World', 'utf8');
  res.end();
})

app.listen(port);