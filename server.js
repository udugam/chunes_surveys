//Import Dependencies
const express = require('express')
const PORT = process.env.PORT || 3001
const routes = require('./routes')

//Create express app
const app = express()

//Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

//Supply all routes to server
app.use(routes)

// //Import database configuration and models
// const db = require("./models")

//Establish connection with database
// db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
// })