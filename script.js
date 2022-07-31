mapboxgl.accessToken =
  "pk.eyJ1IjoiaXNoYW5rZ3VwdGEiLCJhIjoiY2w2OTY5ams2MGp1MzNjcWhkMnkyNTYyOSJ9.zT9sjh9kCC2s94oz_EaHtA"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([76.36, 30.35])
}

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNoYW5rZ3VwdGEiLCJhIjoiY2w2OTY5ams2MGp1MzNjcWhkMnkyNTYyOSJ9.zT9sjh9kCC2s94oz_EaHtA';
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/ishankgupta/cl69dipo4002x14tigibbgik7",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
