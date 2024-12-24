import { ref } from 'vue'
import { defineStore } from 'pinia'
import { apiGetOrdersAll, apiPostOrders } from '@/api/orders';
import { useModalStore } from '@/stores/modal'

export const useOrderStore = defineStore(
  'order',
  () => {
    const newestSuccessOrder = ref(null)
    const allOrders = ref(null)

    const storePostOrders = async (data) => {
      const modalStore = useModalStore()
      modalStore.option = 'order'
      try {
        const res = await apiPostOrders(data)
        if (res.data.status) {
          modalStore.status = 1
          newestSuccessOrder.value = res.data.result
          modalStore.msg = '訂房成功！'
        } else {
          modalStore.status = 0
          modalStore.msg = 'apiPostOrders 未知錯誤'
        }
      } catch(error) {
        if(error.code === 'ECONNABORTED') {
          modalStore.status = 0
          modalStore.errorStatusCode = '' 
          modalStore.msg = '連線逾時，請稍後再試'
        } else if (error.code === 'ERR_NETWORK'){
          modalStore.status = 0
          modalStore.errorStatusCode = '' 
          modalStore.msg = '請檢查網路連線'
        } else {
          modalStore.status = 0
          modalStore.errorStatusCode = error.status
          modalStore.msg = error.response.data.message
        }
      }
      modalStore.openModal()      
    }

    return { newestSuccessOrder, allOrders, storePostOrders }
  }
)
