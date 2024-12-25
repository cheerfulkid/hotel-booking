import { ref } from 'vue'
import { defineStore } from 'pinia'
import { apiGetRoomsDetail } from '@/api/rooms';

export const useTempRoomStore = defineStore('tempRoom', () => {
  const room = ref(null)
  const checkInDate = ref('2023/12/3')
  const checkOutDate = ref('2023/12/4')
  const peopleNum = ref(1)

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
    checkInDate,
    checkOutDate,
    peopleNum,
    storeGetRoomsDetail
  }
})
