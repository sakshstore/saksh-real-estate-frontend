<script setup>
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const center = { lat: 40.689247, lng: -74.044502 }
const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }
</script>

<template>
  <GoogleMap
    api-key="AIzdI"
    mapId="DEMO_MAP_ID"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <AdvancedMarker :options="markerOptions" :pin-options="pinOptions"/>
  </GoogleMap>
</template>
