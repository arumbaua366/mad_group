var express = require("express");

var router = express.Router();
var db = require("../models");
const axios = require("axios");
require("dotenv").config();

// getting the model of the restaruant
const trips = require("../models/trips");
// getting our hidden API key
const key = process.env.API_KEY;
//launching our yelp API call
router.post("/api/proxy", function(req, res) {
  console.log(`yes`);
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?term=food&location=${req.body.location}`,
      {
        headers: {
          Authorization: `Bearer ${key}`
        },
        responseType: `json`
      }
    )
    .then(answer => {
      //returning the information from the API call to the front end
      console.log(answer.data);
      return res.json(answer.data);
    });
});

router.get("/main", function(req, res) {
  // renders the main index page
  res.render("index", req.user);
});

// checks to see if a match can be made inside the db
router.post("/api/match", function (req, res) {
  console.log(req.body.name)
// creates an object in the db table
  db.Trips.create({
    name: req.body.name,
  }).then(data => {
    res.send(data)
  }).catch( err =>{
    //if the entry is unique and already exists we handle this error
    db.Trips.destroy({
      where: {
        name: req.body.name
      }
    })
    //sends the information to the front end
    res.send(req.body.name)
  })
});

