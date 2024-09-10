const { Router } = require('express');
const multer = require('multer');
const { storage } = require('../controllers/multer'); 

const upload = multer({ storage });

const router = Router();


const uploadHandler = (req, res) => {
  res.send(`File uploaded: ${req.file.originalname}`);
  console.log(res.send , res.file)
};


router.post('/upload', upload.single('file'), uploadHandler);

module.exports = router;
