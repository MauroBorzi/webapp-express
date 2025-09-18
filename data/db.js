// Importo mysql2
const mysql = require("mysql2")


// Creo la connessione
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})


// Stabilisco la connesione al DB
connection.connect((err) => {
  if (err) {
    console.log(`Errore di connesione al DB: ${err}`)
  }
  else {
    console.log(`Connesione al DB avvenuta correttamente`)
  }
})

module.exports = connection