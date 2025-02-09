const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/livecursor', {

        });
        console.log('MongoDB connected successfully to livecursor');

    } catch (error) {

        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process on failure

    }
};

module.exports = connectDB;
