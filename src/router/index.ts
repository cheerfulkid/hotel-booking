import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
// import { useTempRoomStore } from '@/stores/tempRoom'
import routes from './routes'

// 初始化 Vue Router 實例
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
        })
        resolve()
      }, 0)
    })
  }
})

// 全局變數存儲前一個頁面的路由
let previousRoute = null;

// 全域前置守衛 - 驗證登入和權限
router.beforeEach(async (to, from, next) => {
  previousRoute = from;
  const userStore = useUserStore()
  if (to.meta.requiresAuth) {
    await userStore.storeGetUserCheck()
    if (!userStore.isLoggedIn) {
      alert('登入狀態已過期，請重新登入')
      userStore.logout()
      next('/login')
    } else {
      next()
    }
  } else if (to.meta.requiresGuest) {
    await userStore.storeGetUserCheck()
    if (userStore.isLoggedIn) {
      next('/home')
    } else {
      next()
    }
  } else {
    next()
  }

  // console.log('當前頁面:', from.path); // 當前頁面的路徑
  // console.log('即將前往:', to.path);  // 目標頁面的路徑
  // console.log('from',from)
  // if(from.name === 'Book' && to.name === 'Success') {
    // const orderStore = useOrderStore()
    // console.log('ENTERING')
    // console.log('orderStore.newestSuccessOrder',orderStore.newestSuccessOrder)
    // console.log('from Book')
    // console.log('routes.name')
  // }
  
})
export { router, previousRoute };
export default router
