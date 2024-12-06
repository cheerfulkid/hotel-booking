import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const isShow = ref(false)
  return {
    isShow
  }
})
