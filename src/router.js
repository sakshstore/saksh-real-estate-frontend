import { createRouter, createWebHistory } from 'vue-router';
import PropertyList from './components/PropertyList.vue';
import PropertyDetail from './components/PropertyDetail.vue';
import TMap from './components/TMap.vue';

const routes = [
    {
        path: '/',
        name: 'PropertyList',
        component: PropertyList
    },{
        path: '/map',
        name: 'TMap',
        component: TMap
    },
    {
        path: '/property/:id',
        name: 'PropertyDetail',
        component: PropertyDetail,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;