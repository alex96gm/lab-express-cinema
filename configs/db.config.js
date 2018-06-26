const mongoose = require('mongoose');
const DB_NAME = 'mongoose-films';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.info(`Connected to database ${DB_NAME}`); 
    })
    .catch(error => {
        console.error("Database connection error", error);
    })