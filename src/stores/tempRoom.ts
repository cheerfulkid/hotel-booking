import { ref } from 'vue'
import { defineStore } from 'pinia'
import { apiGetRoomsDetail } from '@/api/rooms';

export const useTempRoomStore = defineStore('tempRoom', () => {
  const room = ref(null)

  const storeGetRoomsDetail = async (id) => {
    // try {
      // console.log('storeGetRoomsDetail')
      const res = await apiGetRoomsDetail(id)
      room.value = res.data.result
      // console.log('res',res)
      // userInfo.value = res
    // } catch(error) {
      // console.error('Error in storeGetRoomsDetail:', error.message)
    // }
  }
  return {
    room,
    storeGetRoomsDetail
  }
})
