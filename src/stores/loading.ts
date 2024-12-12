import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMaskStore } from '@/stores/mask'

export const useLoadingStore = defineStore('loading', () => {
  const maskStore = useMaskStore()
  const isShow = ref(false)
  const startLoading = () => {
    maskStore.openMask()
    isShow.value = true
  }
  const stopLoading = () => {
    maskStore.closeMask()
    isShow.value = false
  }
  return {
    isShow,
    startLoading,
    stopLoading
  }
})
