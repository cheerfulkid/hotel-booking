import { createRouter, createWebHashHistory } from 'vue-router'
import { apiGetUserCheck } from '@/api/user'
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'
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

router.beforeEach(async (to, from, next) => {
  previousRoute = from;
  const userStore = useUserStore()
  const modalStore = useModalStore()

  // 檢查路由參數是否正確
  if ((to.name === 'HotelDetail' && !to.params.id)) {
    // console.log('導向錯誤頁面')
    return next('/error'); // 如果參數缺失，直接導向錯誤頁面
  }

  // 驗證登入狀態
  if (to.meta.requiresAuth) {
    modalStore.option = 'status'
    try {
      const res = await apiGetUserCheck()
      if (res.data.status) {
        userStore.isLoggedIn = res.data.status
        userStore.token = res.data.token
        return next(); // 驗證成功，繼續導航
      } else {
        modalStore.errorStatusCode = ''
        modalStore.msg = 'apiGetUserCheck 未知錯誤'
        modalStore.openModal()
        return next('/login'); // 驗證失敗，導航到登入頁面
      }
    } catch (error) {
      userStore.logout()
      modalStore.errorStatusCode = error.status
      modalStore.msg = '登入狀態已過期，請重新登入'
      modalStore.openModal()
      return next('/login'); // 捕獲錯誤，導航到登入頁面
    }
  }

  // 檢查是否需要登錄且用戶已經登入
  if (to.meta.requiresGuest && userStore.isLoggedIn) {
    return next('/home'); // 如果需要客人角色但已經登入，則導向首頁
  }

  // 其他情況下正常導航
  next();
});

export { router, previousRoute };
export default router
