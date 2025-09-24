// importo express in funzione del router
const express = require('express')

const router = express.Router()

// importo multer
upload = require("../middlewares/multer")

// importo il controller
const movieController = require('../controllers/movieController')

// definisco le rotte
// index
router.get('/', movieController.index)

// show
router.get('/:id', movieController.show)

// store
router.post('/', upload.single('image'), movieController.store)

// store review
router.post('/:id/reviews', movieController.storeReview)


module.exports = router