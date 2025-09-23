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

  const sqlMovie = `
  SELECT M.*, ROUND(AVG(R.vote)) AS average_vote 
  FROM movies M 
  LEFT JOIN reviews R ON R.movie_id = M.id
  WHERE M.id = ?`

  const sqlreviews = "SELECT * FROM reviews WHERE movie_id = ?"

  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}` })
    if (resultMovie.length === 0 || resultMovie[0].id === null) return res.status(404).json({ error: `Libro non trovato` })

    const movie = resultMovie[0]
    movie.image = req.imgPath + movie.image
    movie.average_vote = parseInt(movie.average_vote)

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


// store review
const storeReview = (req, res) => {

  const { id } = req.params

  const { name, vote, text } = req.body

  const sql = "INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)"

  connection.query(sql, [id, name, vote, text], (err, result) => {

    if (err) return res.status(500).json({ result: false, message: "Errore durante l'inserimento della recensione" })

    res.status(201).json({ result: true, message: "Recensione inserita correttamente" })
  })

}


module.exports = {
  index,
  show,
  storeReview
}