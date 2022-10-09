<template>
  <div class="h-96">
    <div :id="`map${props.id}`" class="h-full z-[1]">
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted, onUnmounted, watch, reactive } from 'vue'
  import marker from '../../assets/mapMarker.svg'
  import leaflet from 'leaflet'
  import { useStore } from '../../store'
  import { useRoute } from 'vue-router';

  const store = useStore()
  const route = useRoute()
  const props = defineProps({
    pinPoint: String,
    id: String,
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
    map = leaflet.map(`map${props.id}`).setView([-6.2534396298273975, 106.82590121868093], 13)
    map.on('click', handleClick)
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    if (props.pinPoint || route.query.coordinate) {
      var valueCoord = route.query.coordinate?.replace(',', ', ')
      setCoords(props.pinPoint || valueCoord)
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
    if (!props.pinPoint && !route.query.coordinate) {
      if (markers) { // check
          map.removeLayer(markers); // remove
      }
      markers = new leaflet.Marker(e.latlng, { icon: customMarker }); // set
      markers.addTo(map)
      coordinate.value = e.latlng
      store.form.coordinate = e.latlng
      // plotGeoLocation(e.latlng.lat, e.latlng.lng)
    }

  }
</script>

<style>

</style>