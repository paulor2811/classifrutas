import { createRouter, createWebHistory } from 'vue-router'
import UserRegister from '../components/UserRegister/Register.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../App.vue')
    },
    {
        path: '/register',
        name: 'UserRegister',
        component: UserRegister,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
