// Importo express con le relative costanti
const express = require('express')

const app = express()

const port = 3000


// Recupero il DB
const connection = require('./data/db')


// Rotta base
app.get("/", (req, res) => {
  res.send(`Rotta base`)
})


// Dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})