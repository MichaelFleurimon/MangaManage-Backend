const express = require("express");
const router = express.Router();
const { getManga, addManga, updateManga, deleteManga } = require("../controllers/mangaController");

router.get("/", getManga);
router.post("/", addManga);
router.put("/:id", updateManga);
router.delete("/:id", deleteManga);

module.exports = router;