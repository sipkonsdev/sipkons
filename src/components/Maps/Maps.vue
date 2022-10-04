<template>
  <div class="h-96">
    <div id="map" class="h-full z-[1]"></div>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted, onUnmounted, watch, reactive } from 'vue'
  import marker from '../../assets/mapMarker.svg'
  import leaflet from 'leaflet'

  let map
  onMounted(() =>{
    map = leaflet.map('map').setView([0, 0], 13)
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    getGeoLocation()
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
    navigator.geolocation.getCurrentPosition(setCoords, getLocError)
  }

  const setCoords = (pos) => {
    fetchCoords.value = null
    initGeoLocation(pos.coords.latitude, pos.coords.longitude)
    const setSessionCoords = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    }
    sessionStorage.setItem('coords', JSON.stringify(setSessionCoords))

    coords.value = setSessionCoords

    plotGeoLocation(pos.coords.latitude, pos.coords.longitude)

  } 

  const getLocError = (err) => {
    console.log(err)
  }
</script>

<style>

</style>