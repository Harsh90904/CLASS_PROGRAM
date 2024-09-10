require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const DB = require('./config/db');

const PORT = process.env.PORT || 8090;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/multer'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  DB()
});
