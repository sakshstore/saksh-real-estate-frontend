
import { createApp } from 'vue';
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp({});

app.use(VueGoogleMaps, {
load: {
key: 'AIzaSyBF0y94GQ1N-62WDAe-IIl5utVyI4GQ4mI',
},
installComponents: true, // Ensure components are installed
});

export default app;
