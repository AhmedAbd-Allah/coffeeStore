const express = require('express');
const app = express();
const Config = require('./Config/Config')
const bodyParser = require('body-parser')
const expressSanitizer = require('express-sanitizer');
const dbURI = process.env.MONGO_URI ? process.env.MONGO_URI : Config.MONGO_URI;
const machinesController = require('./Controllers/CoffeeMachinesController');
const podsController = require('./Controllers/CoffeePodsController');
const mongoose = require('mongoose')

// Start database connection
mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true }
  , function (err, data) {
    if (err)
      console.log(err)
  });

// sanitize the request
app.use(expressSanitizer());


// parse application/json
app.use(bodyParser.json({ extended: false }));

// allow cross origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



// Router
app.post('/machines', machinesController.addCoffeeMachines)
app.post('/pods', podsController.addCoffeePods)

app.get('/machines', machinesController.getCoffeeMachines)
app.get('/pods', podsController.getCoffeePods)

// server up
app.listen(Config.port, () => {
  console.log("Server is on and listening on port ", Config.port);
});

module.exports = app