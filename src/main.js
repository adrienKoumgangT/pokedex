import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import WelcomePage from "@/components/WelcomePage.vue";
import PokemonCardList from "@/components/pokemon/PokemonCardList.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: WelcomePage},
    { path: '/pokemon-list', component: PokemonCardList }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app')
