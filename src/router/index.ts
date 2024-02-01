import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import ProfileEdit from '../views/ProfileEdit.vue'
import Order from '../views/Order.vue'
import OrderEdit from '../views/OrderEdit.vue'

const routes = [
  // { path: '/', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup/:step?', name: 'Signup', component: Signup },
  { path: '/member/profile', name: 'Profile', component: Profile },
  { path: '/member/profile/edit', name: 'ProfileEdit', component: ProfileEdit },
  { path: '/member/order', name: 'Order', component: Order },
  { path: '/member/order/edit', name: 'OrderEdit', component: OrderEdit }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
