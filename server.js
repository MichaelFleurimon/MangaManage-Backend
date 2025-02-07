const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const mangaRoutes = require("./routes/mangaRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001; // alt port 3001 cuz i have a billon things on port 3000

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", mangaRoutes);

// New route to fetch data from Jikan API
app.get("/api/jikan/:id", async (req, res) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/manga/${req.params.id}`);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch data from Jikan API", error: error.message });
  }
});
app.get("/", async (req, res) => {
  res.send("Hello World");
});
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));