const Manga = require("../models/Manga");

// Get all manga (with sorting)
const getManga = async (req, res) => {
  const { sort } = req.query;
  let sortOption = {};
  if (sort === "title") sortOption = { title: 1 };
  if (sort === "rating") sortOption = { rating: -1 };
  if (sort === "date") sortOption = { createdAt: -1 };

  try {
    const manga = await Manga.find().sort(sortOption);
    res.status(200).json(manga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new manga
const addManga = async (req, res) => {
  const { title, author, rating, description, image } = req.body;
  try {
    const newManga = await Manga.create({ title, author, rating, description, image });
    res.status(201).json(newManga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a manga
const updateManga = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedManga = await Manga.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedManga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a manga
const deleteManga = async (req, res) => {
  const { id } = req.params;
  try {
    await Manga.findByIdAndDelete(id);
    res.status(200).json({ message: "Manga deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getManga, addManga, updateManga, deleteManga };