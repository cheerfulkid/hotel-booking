import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMaskStore } from '@/stores/mask'

export const useCalendarStore = defineStore('calendar', () => {
  const maskStore = useMaskStore()
  const isShow = ref(false)
  const step = ref(1)
  const openCalendar = () => {
    maskStore.openMask()
    isShow.value = true
  }
  const closeCalendar = () => {
    maskStore.closeMask()
    isShow.value = false
  }
  const makeSureDate = (device) => {
    step.value = 2
    if(device === 'pc') {
      closeCalendar()
    }    
  }

  const reSelect = () => {
    step.value = 1
    openCalendar()
  }

  const save = () => {
    step.value = 3
    closeCalendar()
  }

  return {
    isShow,
    step,
    openCalendar,
    closeCalendar,
    makeSureDate,
    reSelect,
    save
  }
})
