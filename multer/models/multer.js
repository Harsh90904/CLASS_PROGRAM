const mongoose = require("mongoose");

const multerschrma = mongoose.Schema({
    fieldname: "image",
    type: String
});

const multer =  mongoose.Model("multer" , multerschrma);
module.exports = multer;