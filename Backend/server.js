require('dotenv').config()
const express = require('express')
const app = express()
const path=require('path')
const { logger } = require('./middleware/logger')
const Errorhandler = require('./middleware/Errorhandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/DBconn.js')
const mongoose = require('mongoose')
const { logEvents } = require('./middleware/logger.js')
const PORT = process.env.PORT || 3500

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())
// Middleware to parse x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.use('/',express.static(path.join(__dirname,'public')))

app.use('/',require('./routes/root'))
app.use('/users',require('./routes/userRoutes'))
app.use('/students',require('./routes/studentRoutes.js'))
app.use('/api/students',require('./routes/apiRoutes.js'))

app.use(Errorhandler)

mongoose.connection.once('open' , ()=>{
    console.log('connection to MongoDB')
    app.listen(PORT, () => console.log('Server running on port ${PORT}'))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

