const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require("passport");

// imports the API from the routes/api folder
const users = require('./routes/api/users')

// initializes the express application
const app = express()

// sets up CORS for Cross-Origin-Resource-Sharing
app.use(cors())
// converts API responses to JSON 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// imports our database credentials 
const db = require('./config/keys').mongoURI

// initializes our database using the credentials
mongoose
  .connect(db)
  .then(() => console.log('Mongo Database connected'))
  .catch(err => console.log(err))

// Passport
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// creates a route where we can interact with our API
app.use('/api/users', users)

// sets the port number 
const port = process.env.PORT || 5000

// intializes the server
server = app.listen(port, () => console.log(`Server running on port ${port}`))
console.log("connected")