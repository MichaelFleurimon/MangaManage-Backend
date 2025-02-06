const mongoose = require("mongoose");

const mangaSchema = new mongoose.Schema({
  title: { type:String, required: true },
  author: {  type:String, required: true },
  rating: { type: Number, default:0 ,required: true  },
  description: { type: String,required: true },
  cover_image: { type: String,required: true},
});

module.exports = mongoose.model("Manga", mangaSchema);  