import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMaskStore = defineStore('mask', () => {
  const isShow = ref(false)
  const openMask = () => {
    isShow.value = true
  }
  const closeMask = () => {
    isShow.value = false
  }

  return {
    isShow,
    openMask,
    closeMask
  }
})
