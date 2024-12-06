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
  { path: '/login', name: 'Login', component: Login, meta: { requiresGuest: true } },
  { path: '/signup/:step?', name: 'Signup', component: Signup, meta: { requiresGuest: true } },
  { path: '/home', name: 'Home', component: Home },
  { path: '/allhotel', name: 'AllHotel', component: AllHotel },
  { path: '/hoteldetail', name: 'HotelDetail', component: HotelDetail },
  { path: '/book', name: 'Book', component: Book, meta: { requiresAuth: true } },
  { path: '/success', name: 'Success', component: Success, meta: { requiresAuth: true } },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount,
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true }
      },
      {
        path: 'order',
        name: 'Order',
        component: Order,
        meta: { requiresAuth: true }
      }
    ],
    meta: { requiresAuth: true }
  }
]

export default routes
