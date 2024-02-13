const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Insert initial data
        db.serialize(() => {
            db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");

            // Insert some initial data
            db.run("INSERT INTO users (name, email) VALUES (?, ?)", ['John Doe', 'john@example.com']);
            db.run("INSERT INTO users (name, email) VALUES (?, ?)", ['Jane Smith', 'jane@example.com']);

            console.log('Initial data inserted into the database.');
        });
    }
});

module.exports = db;
