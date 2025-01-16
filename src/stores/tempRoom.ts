import { ref } from 'vue'
import { defineStore } from 'pinia'
import { apiGetRoomsDetail } from '@/api/rooms';
import { useRouter } from 'vue-router'

export const useTempRoomStore = defineStore('tempRoom', () => {
  const router = useRouter()
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

  const decreasePeopleNum = () => {
    console.log('room.value',room.value)
    if (peopleNum.value > 1) {
      peopleNum.value = peopleNum.value-1
    }
  }
  
  const increasePeopleNum = () => {
    console.log('room.value',room.value)
    if (peopleNum.value < room.value?.maxPeople) {
      peopleNum.value =peopleNum.value+1
    }
  }

  const makeOrder = async(obj) => {    
    room.value = obj
    router.push({
      name: 'Book'
    })
  }

  return {
    room,
    checkInDate,
    checkOutDate,
    peopleNum,
    storeGetRoomsDetail,
    decreasePeopleNum,
    increasePeopleNum,
    makeOrder
  }
})
