import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTempRoomStore = defineStore('tempRoom', () => {
  const room = ref(null)
  return {
    room
  }
})
