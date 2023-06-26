const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use the MongoDB connection from config/connection.js
const dbConnection = require('./config/connection');
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbConnection.once('open', () => {
  console.log('Connected to MongoDB');

  // Use the API routes
  app.use('/api', routes);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
