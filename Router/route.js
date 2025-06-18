import { createRouter, createWebHistory } from 'vue-router'

import Home from "../client/src/components/Home.vue"
import Testing from "../client/src/components/Testing.vue"
const routes = [
    {
        path: '/', name: 'Home', component: Home 
    },
    {
        path: '/testing', name: 'testing', component: Testing 
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;