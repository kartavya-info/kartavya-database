const mongoose = require('mongoose')

const connection = {};

const connectDB = async () => {
    if(connection.isConnected) return;

    try {
        const db = await mongoose.connect(process.env.DATABASE_URI || "");
        connection.isConnected = db.connection.readyState;
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB