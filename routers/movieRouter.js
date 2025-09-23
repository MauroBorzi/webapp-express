// importo express in funzione del router
const express = require('express')

const router = express.Router()


// importo il controller
const movieController = require('../controllers/movieController')


// definisco le rotte
// index
router.get('/', movieController.index)

// show
router.get('/:id', movieController.show)

// store review
router.post('/:id/reviews', movieController.storeReview)


module.exports = router