// Recupero la connessione al DB
const connection = require('../data/db')


// index
const index = (req, res) => {
  const sql = "SELECT * FROM movies"

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })
    results.map(resu => {
      resu.image = req.imgPath + resu.image
    })
    res.send(results)
  })
}


// show
const show = (req, res) => {

  const { id } = req.params

  const sqlMovie = "SELECT * FROM movies WHERE id = ?"
  const sqlreviews = "SELECT * FROM reviews WHERE movie_id = ?"

  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })
    if (resultMovie.length === 0 || resultMovie[0].id === null) return res.status(404).json({ error: `Libro non trovato` })

    const movie = resultMovie[0]
    movie.image = req.imgPath + movie.image

    connection.query(sqlreviews, [id], (err, resultRewies) => {
      if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })

      const movieAndReviews = {
        ...movie,
        reviews: resultRewies
      }

      res.send(movieAndReviews)
    })
  })
}


module.exports = {
  index,
  show
}