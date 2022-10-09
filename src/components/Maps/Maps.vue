<template>
  <div class="h-96">
    <div id="map" class="h-full z-[1]">
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted, onUnmounted, watch, reactive } from 'vue'
  import marker from '../../assets/mapMarker.svg'
  import leaflet from 'leaflet'

  const props = defineProps({
    pinPoint: String,
  })
  const coordinate = ref()
  const customMarker = leaflet.icon({
      iconUrl: marker,
      iconSize: [35,35],
    })

  let map
  var markers;
  // map = leaflet.map('map').setView([0, 0], 13)
  onMounted(() =>{
    map = leaflet.map('map').setView([-6.2534396298273975, 106.82590121868093], 13)
    map.on('click', handleClick)
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    if (props.pinPoint) {
      setCoords(props.pinPoint)
      getLocError()
    } 
    // getGeoLocation()
  })
  
  const coords = ref(null)
  const fetchCoords = ref(null)
  const geoMarker = ref(null)

  const initGeoLocation = (lat, lng) => {
    map.setView([lat, lng], 13);
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  }

  const plotGeoLocation = (lat, lng) => {
    const customMarker = leaflet.icon({
      iconUrl: marker,
      iconSize: [35,35],
    })
    geoMarker.value = leaflet.marker([lat, lng], { icon: customMarker }).addTo(map)
    map.setView([lat, lng], 10)
  }

  const getGeoLocation = () => {
    fetchCoords.value = true
    // navigator.geolocation.getCurrentPosition(setCoords, getLocError)
  }

  const setCoords = (param) => {
    fetchCoords.value = null
    const coordinate = param.split(', ')
    console.log('aa', coordinate[0])
    initGeoLocation(coordinate[0], coordinate[1])
    // const setSessionCoords = {
    //   lat: pos.coords.latitude,
    //   lng: pos.coords.longitude,
    // }
    // sessionStorage.setItem('coords', JSON.stringify(setSessionCoords))

    // coords.value = setSessionCoords

    plotGeoLocation(coordinate[0], coordinate[1])

  } 

  const getLocError = (err) => {
    console.log(err)
  }

  const handleClick = (e) => {
   
    if (markers) { // check
        map.removeLayer(markers); // remove
    }
    markers = new leaflet.Marker(e.latlng, { icon: customMarker }); // set
    markers.addTo(map)
    coordinate.value = e.latlng
    // plotGeoLocation(e.latlng.lat, e.latlng.lng)

  }

  // map.on('click', function(e){
  // var coord = e.latlng;
  // var lat = coord.lat;
  // var lng = coord.lng;
  // console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
  // });
</script>

<style>

</style>