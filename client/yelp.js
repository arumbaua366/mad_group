
var express = require("express");
var router = express.Router();
var db = require("../models");
const axios = require("axios");


// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
let apiKey = process.env.YELP_API_KEY || 'Fc-xLpjTtLTCdShtkk6SxM6cx1E1OLXIur6uJYAjzRKIh6kX4xf0c1ViLa-jTEKjYpEiyJmeAqSJoj62G5boAZGuxAB0GRGHjDwgYiUSYaZ5EJA4sywZulKJl7mRXnYx';


const business = require( '../models/activities');

router.post("/activities", function(req, res){
  axios
    .get(
      'https://api.yelp.com/v3/businesses/search/?=${req.body.location}',
      {
        headers: {
          Authorization: `Bearer ${apikey}`
        },
        responseType: `json`
      }
    ).then(answer => {
      console.log(answer.data);
      return res.json(answer.data);
    });
});

router.get("/", function(req, res) {
  res.render("index", req.user);
});

router.post("/api/match", function (req, res) {
  console.log(req.body.name)
  db.Activities.create({
    name: req.body.name,
  }).then(data => {
    res.send(data)
  }).catch( err =>{
    db.Activities.destroy({
      where: {
        name: req.body.name
      }
    })
    res.send(req.body.name)
  })
});

module.exports = router;