import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
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

// 全域前置守衛 - 驗證登入和權限
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth) {
    const isValid = await userStore.checkLogin()
    if (!isValid) {
      alert('登入狀態已過期，請重新登入')
      userStore.logout()
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
