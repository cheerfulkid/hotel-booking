import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const isLoggedIn = ref(false)
    const token = ref(null)
    const userInfo = ref(null)

    // 登入檢查
    const checkLogin = async () => {
      try {
        const response = await axios.get('/api/v1/user/check')
        isLoggedIn.value = response.data.success
        return isLoggedIn.value
      } catch {
        isLoggedIn.value = false
        return false
      }
    }

    // 登出
    const logout = () => {}

    return { isLoggedIn, token, userInfo, checkLogin, logout }
  },
  {
    // persist 配置
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user-store',
          storage: localStorage, // 或 sessionStorage
          paths: ['isLoggedIn', 'token', 'userInfo'] // 指定需要持久化的字段
        }
      ]
    }
  }
)
