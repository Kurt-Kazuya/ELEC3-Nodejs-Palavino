// Name: KURT PALAVINO
// Section: IV-BSIT B
// Activity: N4 - Basic HTTP Server


const http = require('http');

const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Welcome to my Home Page</h1>
      <p>Name: KURT PALAVINO </p>
      <p>Section: IV-BSIT B </p>
      <a href="/about">About</a> | <a href="/contact">Contact</a>
    `);
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>About Me</h1>
      <p>I am 4th year BSIT student and learning Node.js in ELECTIVE 3.</p>
      <p>I enjoy building programs and learning how web development works.</p>
      <a href="/">Home</a>
    `);
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Contact</h1>
      <p>Email: amielstutorials@gmail.com</p>
      <p>Phone: 0930 560 2635</p>
      <a href="/">Home</a>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go back home</a>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
