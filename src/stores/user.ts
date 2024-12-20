import { ref } from 'vue'
import { defineStore } from 'pinia'
import { apiPostUserLogin, apiGetUserProfile, apiGetUserCheck } from '@/api/user'
import { useModalStore } from '@/stores/modal'

export const useUserStore = defineStore(
  'user',
  () => {
    const isLoggedIn = ref(false)
    const token = ref(null)
    const userInfo = ref(null)

    const storePostUserLogin = async (data) => {
      const modalStore = useModalStore()
      modalStore.msg = ''
      modalStore.errorStatusCode = ''
      modalStore.option = 'login'
      try {
        const res = await apiPostUserLogin(data)
        isLoggedIn.value = res.data.status
        token.value = res.data.token
        userInfo.value = res.data.result
        console.log('storePostUserLogin', res)
        if(isLoggedIn.value) {
          modalStore.status = true
          modalStore.msg = '登入成功！'      
        } else {
          modalStore.status = false
          modalStore.msg = '未知錯誤'
        }        
      } catch(error) {
        modalStore.status = false
        modalStore.errorStatusCode = error.status
        modalStore.msg = error.response.data.message
      }      
      modalStore.openModal()
    }

    const storeGetUserProfile = async () => {
      try {
        console.log('storeGetUserProfile')
        const res = await apiGetUserProfile()
        console.log('res',res)
        // userInfo.value = res
      } catch(error) {
        console.error('Error in storeGetUserProfile:', error)
      }
    }

    // 登入檢查
    const storeGetUserCheck = async () => {
      try {
        console.log('storeGetUserCheck')
        const response = await apiGetUserCheck()
        isLoggedIn.value = response.data.status
        token.value = response.data.token
      } catch (error) {
        console.error('Error in storeGetUserCheck:', error)
      }
    }

    // 登出
    const logout = () => {
      isLoggedIn.value = false
      token.value = null
      userInfo.value = null
    }

    return { isLoggedIn, token, userInfo, storePostUserLogin, storeGetUserProfile, storeGetUserCheck, logout }
  },
  {
    // persist 配置
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user-store',
          storage: sessionStorage, // 或 sessionStorage
          paths: ['isLoggedIn', 'token', 'userInfo'] // 指定需要持久化的字段
        }
      ]
    }
  }
)
