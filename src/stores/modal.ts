import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isShow = ref(false)
  const msg = ref()
  const errorStatusCode = ref()
  const status = ref()
  const step = ref()
  const option = ref()
  const hasPrev = ref(false)
  
  const openModal = () => {
    // console.log('test open')
    console.log('option.value',option.value)
    isShow.value = true
    // console.log('openModal')
  }
  const closeModal = () => {
    isShow.value = false
  }

  return {
    isShow,
    msg,
    errorStatusCode,
    status,
    step,
    option,
    hasPrev,
    openModal,
    closeModal
  }
})
