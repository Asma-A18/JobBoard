const express = require('express');
const connectDb = require('./config/connectDB')
const user = require('./routes/user')
const employe = require('./routes/employe')
const company = require('./routes/companyprofileroute')
const annonce = require('./routes/annonce')
const app = express();
const mongoose = require("mongoose");




app.use(express.json())



const db="mongodb://localhost:27017/Projet"

mongoose.connect(db,{ useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true 
    }).then(()=> console.log('mongodb connected...')).catch( err => console.log(err))





app.use('/', user)
app.use('/employe', employe)
// use Routes
app.use('/annonce', annonce)
app.use('/companysprofile', company)

//
const PORT = process.env.PORT || 5000

app.listen(PORT, (err) =>
err ? console.log(err) : console.log(`Server is runnig on ${PORT}`)
) 