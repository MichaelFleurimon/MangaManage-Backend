const Manga = require("../models/manga");

// Add a new manga
// create
const addManga = async (manga) => {
  try {
    const response = await fetch("http://localhost:5000/api/manga", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(manga),
    });
    if (!response.ok) throw new Error("Failed to add manga");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};


// Update a manga card
// update
const updateManga = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedManga = await Manga.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedManga);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Delete a manga
// delete
const deleteManga = async (req, res) => {
  const { id } = req.params;
  try {
    await Manga.findByIdAndDelete(id);
    res.json({ message: "Manga deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { addManga, updateManga, deleteManga };