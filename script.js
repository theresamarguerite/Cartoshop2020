mapboxgl.accessToken = 'pk.eyJ1IjoidGhld2FyZCIsImEiOiItZmM1NVp3In0.MRoiuzp1QVLEw1G-Xm3S3Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-86.5382625, 39.1571695],
zoom: 13
});

//tell the map to load this data layer
map.on('load', function() {
map.addLayer({
'id': 'points',
 'type': 'circle',
'source': {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
// feature for Cardinal Spirits
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [
-86.53666734695435,
 39.15578878326563
]
},
'properties': {
'title': 'Cardinal Spirits',

}
},
{
// feature for Friendly Beasts
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [
-86.5359377861023,
 39.16169536774771
]
},
'properties': {
'title': 'Friendly Beasts Cider Company',

}
},
{
// feature for Hopscotch
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-86.53606653213501,
          39.157236358291996]
},
'properties': {
'title': 'Hopscotch Coffee',

}


}
]
}
},
// add layout feature to include labels
  
  
  
});
});