# N5 - REST-style API (Students)

A simple REST API for **students** built with the Node.js `http` module.
The data is stored in an array inside `server.js` (no database).

## How to run

```bash
   cd set2/n5-api
   node server.js
```

The server runs at `http://localhost:8000`.

## Endpoints

| Method | Endpoint | What it does | Success status |
|--------|----------|--------------|----------------|
| GET | `/api/students` | Returns all students | 200 |
| GET | `/api/students/:id` | Returns one student by id. Returns a 404 JSON message if the id does not exist | 200 / 404 |
| POST | `/api/students` | Adds a new student from the JSON body and returns it | 201 |
| PUT | `/api/students/:id` | Updates the name, course, or year of an existing student | 200 / 404 |
| DELETE | `/api/students/:id` | Removes a student | 200 / 404 |

Any other URL returns `404` with `{ "message": "Route not found" }`.

## Sample JSON body (POST / PUT)

```json
{
  "name": "KURT PALAVINO",
  "course": "BSIT",
  "year": 1
}
```

A POST without `name`, `course`, and `year`, or with invalid JSON, returns `400`.
