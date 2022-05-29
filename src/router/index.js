import {createRouter,createWebHistory} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import Login from "../components/Login.vue";


const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/helloworld',
        component: HelloWorld
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router