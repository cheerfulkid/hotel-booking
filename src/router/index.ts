import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  // { path: '/', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup/:step', name: 'Signup', component: Signup }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
