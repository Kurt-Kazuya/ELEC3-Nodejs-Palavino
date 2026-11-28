# ELEC 3 – Node.js

- Name: KURT PALAVINO
- Section: IV-BSIT B
- Course: ELEC 3 – Node.js
-*Instructor: Carl Gustaf Patrik B. Ferrer

## Activities

### Set 1

| Activity | Title | Description | Folder |
|---|---|---|---|
| N1 | Project Setup and Package Management | npm init, package.json, a dependency (dayjs), a dev dependency (nodemon), and a start script | [set1/n1-setup](set1/n1-setup) |
| N2 | Modular Calculator | Calculator split into operations.js and formatter.js, reads input from process.argv | [set1/n2-calculator](set1/n2-calculator) |
| N3 | File Manager with fs and path | Create, read, update, delete, and list text files inside the files folder | [set1/n3-file-manager](set1/n3-file-manager) |


## How to Run


## Set 1

### N1 – Project Setup and Package Management

```bash
cd set1/n1-setup
npm install
npm start
```

### N2 – Modular Calculator

```bash
cd set1/n2-calculator
node index.js add 12 8
node index.js average 85 90 78
node index.js divide 10 0
```


### N3 – File Manager with fs and path

```bash
cd set1/n3-file-manager
node index.js create sample.txt "Hello"
node index.js read sample.txt
node index.js update sample.txt "More text"
node index.js delete sample.txt
node index.js list
```


