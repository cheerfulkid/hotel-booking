import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import AllHotel from '../views/AllHotel.vue'
import Success from '../views/Success.vue'
import MyAccount from '../views/MyAccount.vue'
import Profile from '../views/Profile.vue'
import Order from '../views/Order.vue'
import HotelDetail from '../views/HotelDetail.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/book', name: 'Book', component: Book },
  { path: '/allhotel', name: 'AllHotel', component: AllHotel },
  { path: '/hoteldetail', name: 'HotelDetail', component: HotelDetail },
  { path: '/login', name: 'Login', component: Login },
  { path: '/success', name: 'Success', component: Success },
  { path: '/myaccount', name: 'MyAccount', component: MyAccount, children: [
    {
      path: 'profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: 'order',
      name: 'Order',
      component: Order
    }
  ] 
  },
  { path: '/signup/:step?', name: 'Signup', component: Signup }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 使用 window.scrollTo 進行平滑滾動
    return new Promise((resolve) => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        resolve();
      }, 0);
    });
  }
})

export default router
