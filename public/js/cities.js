var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js")

mapboxgl.accessToken =
	"pk.eyJ1IjoiYXJ1bWJhdWEzNjYiLCJhIjoiY2s4bHl2MG5vMGRxdDNmbWluNHA4aXMzdyJ9.hNH7BtBBdGmRWMMwcnhNWw"
var map = new mapboxgl.Map({
	container: "YOUR_CONTAINER_ELEMENT_ID",
	style: "mapbox://styles/mapbox/streets-v11",
})
