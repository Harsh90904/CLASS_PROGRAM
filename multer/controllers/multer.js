const multer = require("multer");

const getUpload = (req,res) => {
    res.sed("upload");
}
 const storage = multer.diskStorage({
    destination:"upload",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });


module.exports = {upload , getUpload}