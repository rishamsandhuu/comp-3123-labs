const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const noteRoutes = require('./routes/NoteRoutes.js');

const DB_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 8081;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note Taking Application - Week06 Exercise</h1>");
});

app.use('/notes', noteRoutes);

// Connect to MongoDB
mongoose.connect(DB_URL) 
  .then(() => {
      console.log("Successfully connected to MongoDB Atlas");
      app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
      });
  })
  .catch(err => {
      console.error("Could not connect to the database. Exiting now...", err);
      process.exit(1);
  });
