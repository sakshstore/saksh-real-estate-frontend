
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { Vue3GoogleMap } from 'vue3-google-map';

const app = createApp(App);



app.use(Vue3GoogleMap, {
    load: {
        key: 'AIzaSyBF0y94GQ1N-62WDAe-IIl5utVyI4GQ4mI',
        libraries: 'places'
    }
});
app.use(router);
app.mount('#app');

 

