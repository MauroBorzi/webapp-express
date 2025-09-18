// Recupero la connessione al DB
const connection = require('./data/db')


// index
const index = (req, res) => {
  console.log(`metodo index`)
}


// show
const show = (req, res) => {
  console.log(`metodo show`)
}


module.exports = {
  index,
  show
}