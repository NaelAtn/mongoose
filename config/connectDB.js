// require mongoose

const mongoose = require ("mongoose");


//connectDB 

const connectDB = async () => {
try {
    await mongoose.connect(process.env.DB_URI)
    console.log("DataBase connected")
    
} catch (error) {
    console.log("DataBase is not connected")
}
    
}

module.exports = connectDB ;