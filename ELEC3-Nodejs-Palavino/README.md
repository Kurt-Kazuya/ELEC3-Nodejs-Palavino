# ELEC 3 – Node.js

- **Name:** YOUR FULL NAME
- **Section:** IV-BSIT X
- **Course:** ELEC 3 – Node.js
- **Instructor:** Carl Gustaf Patrik B. Ferrer

## Activities

### Set 1

| Activity | Title | Description | Folder |
|---|---|---|---|
| N1 | Project Setup and Package Management | npm init, package.json, a dependency (dayjs), a dev dependency (nodemon), and a start script | [set1/n1-setup](set1/n1-setup) |
| N2 | Modular Calculator | Calculator split into operations.js and formatter.js, reads input from process.argv | [set1/n2-calculator](set1/n2-calculator) |
| N3 | File Manager with fs and path | Create, read, update, delete, and list text files inside the files folder | [set1/n3-file-manager](set1/n3-file-manager) |

### Set 2

| Activity | Title | Description | Folder |
|---|---|---|---|
| N4 | Basic HTTP Server | http server on port 8000 with /, /about, /contact, and a 404 page | [set2/n4-server](set2/n4-server) |
| N5 | REST-style API | Students API with GET, POST, PUT, and DELETE using JSON | [set2/n5-api](set2/n5-api) |
| N6 | Middleware and API Testing | N5 API with a logger middleware and a JSON header middleware | [set2/n6-middleware](set2/n6-middleware) |

## How to Run

Requires Node.js. Open a terminal in the repository folder, then run the commands below. Stop a running server with `Ctrl + C`.

## Set 1

### N1 – Project Setup and Package Management

```bash
cd set1/n1-setup
npm install
npm start
```

![N1 output](set1/n1-setup/screenshots/n1_output.png)

### N2 – Modular Calculator

```bash
cd set1/n2-calculator
node index.js add 12 8
node index.js average 85 90 78
node index.js divide 10 0
```

![N2 output](set1/n2-calculator/screenshots/n2_output.png)

### N3 – File Manager with fs and path

```bash
cd set1/n3-file-manager
node index.js create sample.txt "Hello"
node index.js read sample.txt
node index.js update sample.txt "More text"
node index.js delete sample.txt
node index.js list
```

![N3 output](set1/n3-file-manager/screenshots/n3_output.png)

## Set 2

### N4 – Basic HTTP Server

```bash
cd set2/n4-server
node server.js
# open http://localhost:8000
```

![N4 output](set2/n4-server/screenshots/n4_output.png)

### N5 – REST-style API

```bash
cd set2/n5-api
node server.js
# test http://localhost:8000/api/students
```

![N5 output](set2/n5-api/screenshots/n5_output.png)

### N6 – Middleware and API Testing

```bash
cd set2/n6-middleware
node server.js
# test with Thunder Client or Postman
```

![N6 output](set2/n6-middleware/screenshots/n6_output.png)
