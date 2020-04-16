const Amadeus = require("amadeus")

const amadeus = new Amadeus({
	clientId: "qsfSi7V01MCQVjLXggQiadczHKytAT2d",
	clientSecret: "lPL16qVdbPypZGS4",
})

amadeus.referenceData.locations
	.get({
		keyword: "LON",
		subType: "AIRPORT,CITY",
	})
	.then(function (response) {
		console.log(response.data) // first page
		return amadeus.next(response)
	})
	.then(function (nextResponse) {
		console.log(nextResponse.data) // second page
	})
