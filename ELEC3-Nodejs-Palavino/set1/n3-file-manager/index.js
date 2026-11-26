// Name: KURT PALAVINO
// Section: IV-BSIT B
// Activity: N3 - File Manager with fs and path

const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'files');
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

function createFile(name, text) {
  const filePath = path.join(folder, name);
  if (fs.existsSync(filePath)) {
    console.log(`Error: ${name} already exists. Use update to add text.`);
    return;
  }
  fs.writeFileSync(filePath, text);
  console.log(`Created ${name}`);
}

function readFile(name) {
  const filePath = path.join(folder, name);
  if (!fs.existsSync(filePath)) {
    console.log(`Error: ${name} does not exist.`);
    return;
  }
  console.log(`----- ${name} -----`);
  console.log(fs.readFileSync(filePath, 'utf8'));
}

function updateFile(name, text) {
  const filePath = path.join(folder, name);
  if (!fs.existsSync(filePath)) {
    console.log(`Error: ${name} does not exist.`);
    return;
  }
  fs.appendFileSync(filePath, `\n${text}`);
  console.log(`Updated ${name}`);
}

function deleteFile(name) {
  const filePath = path.join(folder, name);
  if (!fs.existsSync(filePath)) {
    console.log(`Error: ${name} does not exist.`);
    return;
  }
  fs.unlinkSync(filePath);
  console.log(`Deleted ${name}`);
}

function listFiles() {
  const names = fs.readdirSync(folder);
  if (names.length === 0) {
    console.log('The files folder is empty.');
    return;
  }
  names.forEach((name, index) => {
    const filePath = path.join(folder, name);
    console.log(`\n#${index + 1}`);
    console.log(`Full path : ${filePath}`);
    console.log(`File name : ${path.basename(filePath)}`);
    console.log(`Extension : ${path.extname(filePath)}`);
    console.log(`Contents  : ${fs.readFileSync(filePath, 'utf8')}`);
  });
  console.log(`\nTotal files: ${names.length}`);
}

function showUsage() {
  console.log('Commands:');
  console.log('  node index.js create <file> "<text>"');
  console.log('  node index.js read <file>');
  console.log('  node index.js update <file> "<text>"');
  console.log('  node index.js delete <file>');
  console.log('  node index.js list');
}

if (command === 'list') {
  listFiles();
} else if (['create', 'read', 'update', 'delete'].includes(command) && !fileName) {
  console.log('Error: Please enter a file name.');
} else if (command === 'create') {
  createFile(fileName, content || '');
} else if (command === 'read') {
  readFile(fileName);
} else if (command === 'update') {
  updateFile(fileName, content || '');
} else if (command === 'delete') {
  deleteFile(fileName);
} else {
  showUsage();
}
