// import Map from 'ol/Map.js'
// import View from 'ol/View.js'
// import {fromLonLat} from 'ol/proj.js'
// import TileLayer from 'ol/layer/Tile.js'
// import OSM from 'ol/source/OSM.js'

// create a map
function init(){
  var view = new ol.View({
    center: ol.proj.fromLonLat([41.01224, 28.9784]),
    zoom: 6
  });
  var map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        preload: 4,
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}
window.onload = init;
