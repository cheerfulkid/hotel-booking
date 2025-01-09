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
    const rememberMe = ref(false)
    const savedEmail = ref(localStorage.getItem('savedEmail') || '')

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
        // console.log('storePostUserLogin', res)
        if(isLoggedIn.value) {
          modalStore.status = true
          modalStore.msg = '登入成功！'      
          if (rememberMe.value) {
            localStorage.setItem('savedEmail', userInfo.value.email)
          } else {
            localStorage.removeItem('savedEmail')
          }
        } else {
          modalStore.status = false
          modalStore.msg = '未知錯誤'
        }        
      } catch(error) {
        // console.log('error',error)        
        if(error.code === 'ECONNABORTED') {
          modalStore.status = false
          modalStore.errorStatusCode = '' 
          modalStore.msg = '連線逾時，請稍後再試'
        } else if (error.code === 'ERR_NETWORK'){
          modalStore.status = false
          modalStore.errorStatusCode = '' 
          modalStore.msg = '請檢查網路連線'
        } else {
          modalStore.status = false
          modalStore.errorStatusCode = error.status
          modalStore.msg = error.response.data.message
        }        
      }      
      modalStore.openModal()
    }

    const storeGetUserProfile = async () => {
      try {
        // console.log('storeGetUserProfile')
        const res = await apiGetUserProfile()
        // 原本應該直接用 storeGetUserProfile() 獲取會員資料即可 但回傳的 API 沒有 city 跟 county，只好用其他方式
        // 另外補上 city & area
        userInfo.value = res.data.result
        userInfo.value.address.city = localStorage.getItem('city')
        userInfo.value.address.area = localStorage.getItem('area')
      } catch(error) {
        // console.error('Error in storeGetUserProfile:', error)
        if(error.code === 'ECONNABORTED') {
          modalStore.option = 'network'
          modalStore.errorStatusCode = '' 
          modalStore.msg = '連線逾時，請稍後再試'
        } else if (error.code === 'ERR_NETWORK'){
          modalStore.option = 'network'
          modalStore.errorStatusCode = '' 
          modalStore.msg = '請檢查網路連線'
        } else {
          modalStore.errorStatusCode = error.status
          modalStore.msg = error.response.data.message
        }
        modalStore.openModal()
      }
    }

    // // 登入檢查
    // const storeGetUserCheck = async () => {
    //   const modalStore = useModalStore()
    //   try {
    //     const res = await apiGetUserCheck()
    //     if( res.data.status) {
    //       isLoggedIn.value = response.data.status
    //       token.value = response.data.token          
    //     } else {
    //       modalStore.errorStatusCode = ''
    //       modalStore.msg = 'apiGetUserCheck 未知錯誤'
    //     }        
    //   } catch (error) {
    //     modalStore.errorStatusCode = error.status
    //     modalStore.msg = error.response.data.message
    //     modalStore.openModal()
    //     logout()  
    //   }
    // }

    // 登出
    const logout = () => {
      isLoggedIn.value = false
      token.value = null
      userInfo.value = null
      // sessionStorage.removeItem('user-store') // 清除 sessionStorage 中的資料
    }

    // 檢查是否需要重新載入資料
    // if (!sessionStorage.getItem('user-store')) {
    //   logout() // 如果 sessionStorage 無資料，則登出
    // }

    return { isLoggedIn, token, userInfo, rememberMe, savedEmail, storePostUserLogin, storeGetUserProfile, logout }
  },
  {
    // persist 配置
    persist: {        
      key: 'user-store',
      storage: sessionStorage, // 或 sessionStorage
      paths: ['isLoggedIn', 'token', 'userInfo'] // 指定需要持久化的字段
    }
  }
)
