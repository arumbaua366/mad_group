<<<<<<< HEAD

var express = require("express");
var router = express.Router();
var db = require("../models");
const axios = require("axios");

=======
"use strict"

const yelp = require("yelp-fusion")
const db = require("../db")
>>>>>>> andrea

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
let apiKey =
	process.env.YELP_API_KEY ||
	"Fc-xLpjTtLTCdShtkk6SxM6cx1E1OLXIur6uJYAjzRKIh6kX4xf0c1ViLa-jTEKjYpEiyJmeAqSJoj62G5boAZGuxAB0GRGHjDwgYiUSYaZ5EJA4sywZulKJl7mRXnYx"

<<<<<<< HEAD

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
=======
const client = yelp.client(apiKey)

module.exports = function (app) {
	app.get("/trip/:tripId", (req, res, next) => {
		var searchRequest = {
			term: req.query.term,
			location: req.query.location,
		}
		client
			.search(searchRequest)
			.then(response => {
				res.json(response.jsonBody.businesses)
			})
			.catch(err => {
				console.error(err)
			})
	})

	app.get("/topactivities", (req, res, next) => {
		client
			.search({ location: req.query.city, sort_by: "rating", limit: 5 })
			.then(response => {
				res.json(response.jsonBody.businesses)
			})
			.catch(err => console.error(err))
	})
}
>>>>>>> andrea
