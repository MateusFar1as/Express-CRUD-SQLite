const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/students.db', (err) => {
  if (err) {
    return console.error(`Error on connection: ${err.message}`);
  }

  console.log('Connected to students.db');
});

module.exports = db;
