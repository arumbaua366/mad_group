const Amadeus = require("amadeus");

const amadeus = new Amadeus({
    clientId: "qsfSi7V01MCQVjLXggQiadczHKytAT2d",
    clientSecret: "lPL16qVdbPypZGS4"
});

amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SMF',
    destinationLocationCode: 'LAX',
    departureDate: '2020-08-01',
    adults: '2'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});