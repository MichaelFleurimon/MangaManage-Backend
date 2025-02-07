const express = require("express");
const router = express.Router();
const Manga = require("../models/manga");

// Create a new manga
router.post("/", async (req, res) => {
  try {
    const manga = new Manga(req.body);
    await manga.save();
    res.status(201).send(manga);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all mangas
router.get("/", async (req, res) => {
  try {
    const mangas = await Manga.find();
    res.status(200).send(mangas);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a manga by ID
router.get("/:id", async (req, res) => {
  try {
    const manga = await Manga.findById(req.params.id);
    if (!manga) {
      return res.status(404).send();
    }
    res.status(200).send(manga);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a manga by ID
router.patch("/:id", async (req, res) => {
  try {
    const manga = await Manga.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!manga) {
      return res.status(404).send();
    }
    res.status(200).send(manga);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a manga by ID
router.delete("/:id", async (req, res) => {
  try {
    const manga = await Manga.findByIdAndDelete(req.params.id);
    if (!manga) {
      return res.status(404).send();
    }
    res.status(200).send(manga);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;