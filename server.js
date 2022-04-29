const express = require("express") ;

//2 create instance 
const app = express()

//4 require dotenv nd config

require("dotenv").config();

//8 Middlewere bodyparser
app.use(express.json())

//6 connect db

const connectDB = require ('./config/connectDB') ;
connectDB();

//7 create routes

app.use('/api/contact' , require('./routes/contact'))



//3 create port 

const PORT = process.env.PORT;

//5 create server 
app.listen(PORT , error =>{
    error? console.error(`Fail to connect , ${error}`)
    :
    console.error(`Server is running on port ${PORT}`)
})
