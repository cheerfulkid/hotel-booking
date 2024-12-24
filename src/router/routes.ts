import Home from '@/views/Home.vue'
import Book from '@/views/Book.vue'
import AllHotel from '@/views/AllHotel.vue'
import Success from '@/views/Success.vue'
import MyAccount from '@/views/MyAccount.vue'
import Profile from '@/views/Profile.vue'
import Order from '@/views/Order.vue'
import HotelDetail from '@/views/HotelDetail.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Error from '@/views/Error.vue'

const routes = [
  { path: '/login', name: 'Login', component: Login, meta: { requiresAuth: false, requiresGuest: true } },
  { path: '/signup/:step?', name: 'Signup', component: Signup, meta: { requiresAuth: false, requiresGuest: true } },
  { path: '/home', name: 'Home', component: Home, meta: { requiresAuth: false, requiresGuest: false } },
  { path: '/allhotel', name: 'AllHotel', component: AllHotel, meta: { requiresAuth: false, requiresGuest: false } },
  { path: '/hoteldetail/:id?', name: 'HotelDetail', component: HotelDetail, meta: { requiresAuth: false, requiresGuest: false } },
  { path: '/book', name: 'Book', component: Book, meta: { requiresAuth: true, requiresGuest: false } },
  { path: '/success', name: 'Success', component: Success, meta: { requiresAuth: true, requiresGuest: false } },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount,
    redirect: '/myaccount/profile',
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true, requiresGuest: false }
      },
      {
        path: 'order',
        name: 'Order',
        component: Order,
        meta: { requiresAuth: true, requiresGuest: false }
      }
    ],
    meta: { requiresAuth: true, requiresGuest: false }
  },
  { path: '/', redirect: '/home' },
  { path: '/error', name: 'Error', component: Error, meta: { requiresAuth: false, requiresGuest: false } },
  { path: '/:catchAll(.*)', redirect: '/error' } // 捕獲所有未定義路徑並重定向至錯誤頁面
]

export default routes
