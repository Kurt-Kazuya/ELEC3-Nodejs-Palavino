// Name: KURT PALAVINO
// Section: IV-BSIT B
// Activity: N5 - REST-style API

const http = require('http');

const PORT = 8000;

let students = [
  { id: 1, name: 'MAX VERSTAPPEN', course: 'BSIT', year: 4 },
  { id: 2, name: 'LEWIS HAMILTON', course: 'BSCS', year: 3 },
  { id: 3, name: 'KIMI ANTONELLI', course: 'BSIT', year: 2 },
];

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function readBody(req, callback) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    try {
      callback(null, JSON.parse(body) || {});
    } catch (error) {
      callback(error);
    }
  });
}

const server = http.createServer((req, res) => {
  const parts = req.url.split('/');
  const id = Number(parts[3]);

  if (req.url === '/api/students' && req.method === 'GET') {
    sendJson(res, 200, students);
  } else if (req.url.match(/^\/api\/students\/\d+$/) && req.method === 'GET') {
    const student = students.find((s) => s.id === id);
    if (student) {
      sendJson(res, 200, student);
    } else {
      sendJson(res, 404, { message: `Student with id ${id} not found` });
    }
  } else if (req.url === '/api/students' && req.method === 'POST') {
    readBody(req, (error, data) => {
      if (error || !data.name || !data.course || !data.year) {
        sendJson(res, 400, { message: 'Please send name, course, and year in JSON format' });
        return;
      }
      const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
      const newStudent = { id: newId, name: data.name, course: data.course, year: data.year };
      students.push(newStudent);
      sendJson(res, 201, newStudent);
    });
  } else if (req.url.match(/^\/api\/students\/\d+$/) && req.method === 'PUT') {
    const student = students.find((s) => s.id === id);
    if (!student) {
      sendJson(res, 404, { message: `Student with id ${id} not found` });
      return;
    }
    readBody(req, (error, data) => {
      if (error) {
        sendJson(res, 400, { message: 'Invalid JSON body' });
        return;
      }
      student.name = data.name || student.name;
      student.course = data.course || student.course;
      student.year = data.year || student.year;
      sendJson(res, 200, student);
    });
  } else if (req.url.match(/^\/api\/students\/\d+$/) && req.method === 'DELETE') {
    const student = students.find((s) => s.id === id);
    if (!student) {
      sendJson(res, 404, { message: `Student with id ${id} not found` });
      return;
    }
    students = students.filter((s) => s.id !== id);
    sendJson(res, 200, { message: `Student with id ${id} deleted`, student });
  } else {
    sendJson(res, 404, { message: 'Route not found' });
  }
});

server.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
});
