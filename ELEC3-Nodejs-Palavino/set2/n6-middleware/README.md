# N6 - Middleware and API Testing

This is a copy of the N5 Students API with two custom middleware functions added.

| Middleware | What it does |
|------------|--------------|
| `logger` | Logs the date/time, HTTP method, and URL of every request in the terminal |
| `jsonMiddleware` | Sets `Content-Type: application/json` for every response, so the routes do not repeat it |

Both call `next()` so the request continues to `handleRoutes()`.

## How to run

```bash
cd set2/n6-middleware
node server.js
```

## Endpoints tested with Thunder Client / Postman

| Method | URL | Body |
|--------|-----|------|
| GET | `http://localhost:8000/api/students` | none |
| GET | `http://localhost:8000/api/students/1` | none |
| POST | `http://localhost:8000/api/students` | `{ "name": "Ana Garcia", "course": "BSIT", "year": 1 }` |
| PUT | `http://localhost:8000/api/students/1` | `{ "course": "BSCS", "year": 3 }` |
| DELETE | `http://localhost:8000/api/students/3` | none |
