const mongodb = require("mongoose");


const DB = async () => {
  await  mongodb.connect("mongodb://localhost:27017/multer");
  console.log("Connected to MongoDB!");
}

module.exports = DB;