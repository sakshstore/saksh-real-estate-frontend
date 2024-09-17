
import { createApp } from 'vue';
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp({});

app.use(VueGoogleMaps, {
load: {
key: 'd-d',
},
installComponents: true, // Ensure components are installed
});

export default app;
