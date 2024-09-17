<template>
    <div>
        <h1>Property List</h1>
        <table>
            <thead>
                <tr>
                    <th>Property ID</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th>Owner Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="property in properties" :key="property.propertyID">
                    <td>
                        <router-link :to="{ name: 'PropertyDetail', params: { id: property.propertyID } }">
                            {{ property.propertyID }}
                        </router-link>
                    </td>
                    <td>{{ property.address }}</td>
                    <td>{{ property.price }}</td>
                    <td>{{ property.ownerName }}</td>
                </tr>
            </tbody>
        </table>

        <GoogleMap api-key="AIzaSyBF0y94GQ1N-62WDAe-IIl5utVyI4GQ4mI" style="width: 100%; height: 500px"
            :center="mapCenter" :zoom="15">
            <Marker v-for="property in properties" :key="property.propertyID"
                :options="{ position: { lat: property.latitude, lng: property.longitude } }" />
        </GoogleMap>
    </div>
</template>

<script>



import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
data() {
return {
properties: [],
mapCenter: { lat: 0, lng: 0 },
markerOptions: {
// Add any marker options here
}
};
},
async mounted() {
await this.fetchProperties();
},
methods: {
async fetchProperties() {
try {
const response = await axios.get('http://localhost:3000/properties');
this.properties = response.data;
if (this.properties.length > 0) {
this.mapCenter = {
lat: this.properties[0].latitude,
lng: this.properties[0].longitude
};
}
} catch (error) {
console.error('Error fetching properties:', error);
}
}
},
components: {
GoogleMap,
Marker
}
};

    </script>