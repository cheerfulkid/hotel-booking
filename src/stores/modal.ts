import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isShow = ref(false)
  const msg = ref('')
  const errorStatus = ref('')
  const status = ref()
  const step = ref(0)
  const option = ref('')
  
  const openModal = () => {
    // console.log('test open')
    isShow.value = true
    // console.log('openModal')
  }
  const closeModal = () => {
    isShow.value = false
  }

  return {
    isShow,
    msg,
    errorStatus,
    status,
    step,
    option,
    openModal,
    closeModal
  }
})
