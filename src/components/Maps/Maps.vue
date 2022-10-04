<template>
  <div class="h-screen relative">
    <div id="map" class="h-full z-[1]"></div>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted, onUnmounted, watch, reactive } from 'vue'
  import leaflet from 'leaflet'

  const coords = ref(null)
  const fetchCoords = ref(null)
  const geoMarker = ref(null)

  const getGeoLocation = () => {
    fetchCoords.value = true
    navigator.geolocation.getCurrentPosition(setCoords, getLocError)
  }

  const setCoords = (pos) => {
    fetchCoords.value = null
    coords.lat = pos.coords.lat
    coords.lng =  pos.coords.lng

    const setSessionCoords = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    }
    sessionStorage.setItem('coords', JSON.stringify(setSessionCoords))

    const map = leaflet.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  } 

  const getLocError = (err) => {
    console.log(err)
  }

  onMounted(() =>{
    getGeoLocation()
  })
</script>

<style>

</style>