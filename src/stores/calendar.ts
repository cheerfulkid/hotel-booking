import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMaskStore } from '@/stores/mask'

export const useCalendarStore = defineStore('modal', () => {
  const maskStore = useMaskStore()
  const isShow = ref(false)
  const openCalendar = () => {
    maskStore.openMask()
    isShow.value = true
  }
  const closeCalendar = () => {
    maskStore.closeMask()
    isShow.value = false
  }
  const makeSureDate = () => {
    closeCalendar()
  }

  return {
    isShow,
    openCalendar,
    closeCalendar,
    makeSureDate
  }
})
