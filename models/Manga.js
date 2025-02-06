const mongoose = require("mongoose");

const mangaSchema = new mongoose.Schema({
  title: { type:String, required: true },
  author: {  type:String, required: true },
    Page:{  type:Number, required: false },
  description: { type: String,required: true },
  cover_image: { type: String,required: true},
});

module.exports = mongoose.model("Manga", mangaSchema);  