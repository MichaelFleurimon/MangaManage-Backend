const mongoose = require("mongoose");

const readingListSchema = new mongoose.Schema({
  mangaId: { type: mongoose.Schema.Types.ObjectId, ref: "Manga", required: true },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ReadingList", readingListSchema);