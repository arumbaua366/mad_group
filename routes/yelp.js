

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
let apiKey = process.env.YELP_API_KEY || 'Fc-xLpjTtLTCdShtkk6SxM6cx1E1OLXIur6uJYAjzRKIh6kX4xf0c1ViLa-jTEKjYpEiyJmeAqSJoj62G5boAZGuxAB0GRGHjDwgYiUSYaZ5EJA4sywZulKJl7mRXnYx';

const client = yelp.client(apiKey);

module.exports = function(app){
app.get('/trip/:tripId', (req, res, next) => {
  var searchRequest = {
    term: req.query.term,
    location: req.query.location
  }
  client.search(searchRequest).then(response => {
    res.json(response.jsonBody.businesses)
  }).catch(err => {
    console.error(err);
  })
})

app.get('/topactivities', (req, res, next) => {
  client.search({location: req.query.city, sort_by: 'rating', limit: 5})
    .then(response => {
      res.json(response.jsonBody.businesses)
    })
    .catch(err => console.error(err))
})
}