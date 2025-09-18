// Importo express con le relative costanti
const express = require('express')

const app = express()

const port = process.env.PORT


// importo utility
const movieRouter = require("./routers/movieRouter")
const imgPathMiddleware = require("./middlewares/imgPathMiddleware")


// middleware per l'utilizzo di IMG 
app.use(express.static("public"))

app.use(imgPathMiddleware)


// Rotta base
app.get("/", (req, res) => {
  res.send(`Rotta base`)
})


// definisco le rotte per i film
app.use("/movies", movieRouter)


// Dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})