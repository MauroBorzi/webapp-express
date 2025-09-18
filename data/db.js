// Importo mysql2
const mysql = require("mysql2")


// Creo la connessione
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db_movies'
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