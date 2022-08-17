// Our Access Token
mapboxgl.accessToken =
  'pk.eyJ1IjoiZG9yaWFuZm9uZyIsImEiOiJjbDZ1dzluZTYxNWhpM2NxOWNhamJyeHBrIn0.3kUdlYLDvjorbOk2kSWmcQ'

//Once open map, start with current position/location  
//we use navigator.geolocation.getCurrentPosition() API 
//for our web app get the location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

//Takes in position, 
function successLocation(position) {
  //in Mapbox, longitude comes first before latitude
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  //For error (current location unavailable), we setup Map 
  //with a default location - Manchester
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    //style: street view map 
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  //Taken from: https://docs.mapbox.com/mapbox-gl-js/
  //For navigation controls (to zoom in and out on the map, rotate etc.)
  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}

