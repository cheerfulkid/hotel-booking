import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/book', name: 'Book', component: Book },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup/:step?', name: 'Signup', component: Signup }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
