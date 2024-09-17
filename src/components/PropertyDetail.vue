<template>
  <div>
    <h1>Property Details</h1>

    <GoogleMap :center="mapCenter" :zoom="12" style="width: 100%; height: 400px;">
      <Marker v-if="property" :position="{ lat: property.latitude, lng: property.longitude }" />
    </GoogleMap>

    <div v-if="property">
      <p><strong>Property ID:</strong> {{ property.propertyID }}</p>
      <p><strong>Address:</strong> {{ property.address }}</p>
    </div>

    <div v-if="similarProperties.length">
      <h2>Similar Properties</h2>
      <ul>
        <li v-for="similarProperty in similarProperties" :key="similarProperty.propertyID">
          <p><strong>Property ID:</strong> {{ similarProperty.propertyID }}</p>
          <p><strong>Address:</strong> {{ similarProperty.address }}</p>
          <p><strong>Price:</strong> {{ similarProperty.price }}</p>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>Loading property details...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  data() {
    return {
      property: null,
      similarProperties: [],
      mapCenter: { lat: 26, lng: 80 } // Default center
    };
  },
  props: ['id'],
  created() {
    this.fetchProperty();
    this.fetchSimilarProperties();
  },
  methods: {
    async fetchProperty() {
      try {
        const response = await axios.get(`http://localhost:3000/properties/${this.id}`);
        console.log('Property data:', response.data);
        this.property = response.data;
        if (this.property) {
          this.mapCenter = { lat: this.property.latitude, lng: this.property.longitude };
          console.log('Map center set to:', this.mapCenter);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
        // Consider displaying a user-friendly error message
      }
    },
    async fetchSimilarProperties() {
      try {
        const response = await axios.get(`http://localhost:3000/properties/${this.id}/similar`);
        console.log('Similar properties data:', response.data);
        this.similarProperties = response.data;
      } catch (error) {
        console.error('Error fetching similar properties:', error);
        // Consider displaying a user-friendly error message
      }
    }
  },
  components: {
    GoogleMap,
    Marker
  }
};
</script>

<style>
p {
  font-size: 16px;
  margin: 10px 0;
}
</style>