const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const mangaRoutes = require("./routes/mangaRoutes");
const importer = require("./controllers/ImportManga");
dotenv.config();
const app = express();
//const PORT = process.env.PORT || 3001 // alt port 3001 cuz i have a billon things on port 3000
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/manga", mangaRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
        importer.importManga();
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.error(error));