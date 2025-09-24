const multer = require('multer')

const storage = multer.diskStorage({
  destination: "./public/img/movies",
  filename: (req, file, cb) => {
    const uniqueName = `${DataTransfer.now()}-${file.originalname}`
    cb(null, uniqueName)
  }
})

const upload = multer({ storage })

module.exports = upload