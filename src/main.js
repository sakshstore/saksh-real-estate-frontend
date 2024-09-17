
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { Vue3GoogleMap } from 'vue3-google-map';

const app = createApp(App);



app.use(Vue3GoogleMap, {
    load: {
        key: 'dI',
        libraries: 'places'
    }
});
app.use(router);
app.mount('#app');

 

