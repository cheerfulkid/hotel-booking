import { ref } from 'vue'
import { defineStore } from 'pinia'
import { apiGetOrdersAll, apiPostOrders } from '@/api/orders';
import { useModalStore } from '../stores/modal'

export const useOrderStore = defineStore(
  'order',
  () => {
    const newestSuccessOrder = ref(null)
    const allOrders = ref(null)

    const storeGetOrdersAll = async () => {
      const modalStore = useModalStore()
      modalStore.option = ''
      try {
        const res = await apiGetOrdersAll()
        console.log('storeGetOrdersAll', res)
        if (res.data.status) { 
          allOrders.value = res.data.result
        } else {
          console.log('get false', res)
        }        
      } catch(error) {
        console.log('catch error', error)
        modalStore.status = 0
        modalStore.errorStatus = error.status
        modalStore.msg = error.response.data.message
        modalStore.openModal()
        // modalStore.status = 0
        // modalStore.errorStatus = error.status
        // modalStore.msg = error.response.data.message
      }
      // modalStore.openModal()
    }

    const storePostOrders = async (data) => {
      const modalStore = useModalStore()
      try {
        const res = await apiPostOrders(data)
        console.log('storePostOrders', res)
        if (res.data.status) {
          modalStore.status = 1
          newestSuccessOrder.value = res.data.result
          modalStore.msg = '訂房成功！'
        } else {
          modalStore.status = 0
          modalStore.msg = '訂房失敗'
        }
      } catch(error) {
        modalStore.status = 0
        modalStore.errorStatus = error.status
        modalStore.msg = error.response.data.message
      }
      console.log('modalStore', modalStore)
      modalStore.openModal()      
    }

    return { newestSuccessOrder, allOrders, storeGetOrdersAll, storePostOrders }
  }
)
