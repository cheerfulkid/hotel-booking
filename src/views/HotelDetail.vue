<template>
  <div class="min-h-[100%]">
    <Header></Header>
    <main>
      <section v-if="room?.imageUrlList.length!=0" class="relative bg-[#F7F2EE] px-0 lg:px-[12px] pt-[72px] lg:pt-[200px] lg:pb-[80px]">
        <div class="max-w-[1760px] mx-auto overflow-hidden lg:rounded-xl">
          <Splide :options="options" :extensions="extensions" aria-label="享樂酒店">
            <SplideSlide v-for="(img,index) in room?.imageUrlList" :key="img">
              <img class="object-cover object-center" :class="[index === 0 ? 'lg:h-[600px]' : 'lg:h-[296px]']" :src="img" :alt="img" />
            </SplideSlide>            
            <!-- <SplideSlide>
              <img class="lg:h-[600px] object-cover object-center" src="@/assets/img/pc/room2-1.png" alt="Sample 1" />
            </SplideSlide>
            <SplideSlide>
              <img class="lg:h-[296px] object-cover object-center" src="@/assets/img/pc/room2-2.png" alt="Sample 2" />
            </SplideSlide>
            <SplideSlide>
              <img class="lg:h-[296px] object-cover object-center" src="@/assets/img/pc/room2-3.png" alt="Sample 3" />
            </SplideSlide>
            <SplideSlide>
              <img class="lg:h-[296px] object-cover object-center" src="@/assets/img/pc/room2-4.png" alt="Sample 4" />
            </SplideSlide>
            <SplideSlide>
              <img class="lg:h-[296px] object-cover object-center" src="@/assets/img/pc/room2-5.png" alt="Sample 5" />
            </SplideSlide> -->
          </Splide>
        </div>
        <router-link
          :to="{ name: 'AllHotel' }"
          class="absolute bottom-[23px] right-[12px] lg:hidden w-[113px] h-[56px] border-[#BF9D7D] bg-[#FFFFFF] rounded-lg font-bold text-[#BF9D7D] flex items-center justify-center"
          >看更多</router-link
        >
      </section>
      <section v-else class="relative bg-[#F7F2EE] px-0 lg:px-[12px] pt-[72px] lg:pt-[200px] lg:pb-[80px] flex items-center justify-center">載入中...</section>
      <section class="relative bg-[#F7F2EE] px-[12px] py-[40px] lg:pt-[120px] lg:pb-[120px]">
        <div class="max-w-[1296px] mx-auto md:flex items-start">
          <div class="w-full max-w-full lg:max-w-[746px] lg:mr-[72px]">
            <h3 class="text-[2rem] md:text-[3rem] mb-[16px]">{{ room?.name }}</h3>
            <p class="text-[0.875rem] mb-[24px] md:mb-[80px]">
              {{ room?.description }}
            </p>
            <div class="mb-[24px] md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >房型基本資訊</DecoTitle
              >
              <BasicInfo :roomSize="room?.areaInfo" :bedCount="room?.bedInfo" :peopleCount="`2-${room?.maxPeople}`"></BasicInfo>
            </div>
            <div class="mb-[24px] md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >房間格局</DecoTitle
              >
              <div
                class="w-full grid grid-cols-3 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg"
              >                
                <CheckItem>市景</CheckItem>
                <CheckItem>獨立衛浴</CheckItem>
                <CheckItem>客廳</CheckItem>
                <CheckItem>書房</CheckItem>
                <CheckItem>樓層電梯</CheckItem>
              </div>
            </div>
            <div class="mb-[24px] md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >房內設備</DecoTitle
              >
              <div
                class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg"
              >
                <CheckItem v-for="(facility, index) in room?.facilityInfo?.filter(item => item.isProvide)" :key="facility?.title">{{ facility?.title }}</CheckItem>
              </div>
            </div>
            <div class="mb-[24px] md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >備品提供</DecoTitle
              >
              <div
                class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg"
              >
                <CheckItem customClass="text-[0.875rem] md:text-[1rem]" v-for="(amenity, index) in room?.amenityInfo?.filter(item => item.isProvide)" :key="amenity?.title">{{ amenity?.title }}</CheckItem> 
              </div>
            </div>
            <div class="md:mb-[80px]">
              <DecoTitle customClass="mb-[16px] md:mb-[24px] text-[1rem] md:text-[1.5rem] before:bg-[#BF9D7D]"
                >訂房須知</DecoTitle
              >
              <ol class="list-decimal ml-[24px] text-[0.875rem] md:text-[1rem] text-[#4B4B4B]">
                <li>入住時間為下午3點，退房時間為上午12點。</li>
                <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
                <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
                <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
                <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
                <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
                <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
                <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
                <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
                <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
              </ol>
            </div>
          </div>
          <aside class="relative hidden lg:block p-[40px] bg-[#FFFFFF] rounded-xl max-w-[478px] sticky top-[120px]">
            <h6 class="text-[1.5rem] mb-[56px] pb-[16px] border-b border-[#ECECEC]">預訂房型</h6>
            <h3 class="text-[2.5rem] mb-[8px]">{{ room?.name }}</h3>
            <p class="mb-[40px]">{{ room?.description }}</p>
            <div class="relative grid grid-flow-col gap-[8px] mb-[16px] justify-stretch items-center">
              <button class="p-[16px] border rounded-lg text-left" @click="calendarStore.openCalendar()">
                <p class="text-[0.75rem]">入住</p>
                <p>2023 / 12 / 11</p>
              </button>
              <button class="p-[16px] border rounded-lg text-left" @click="calendarStore.openCalendar()">
                <p class="text-[0.75rem]">退房</p>
                <p>2023 / 12 / 27</p>
              </button>
            </div>
            <div class="flex justify-between items-center mb-[40px]">
              <p class="text-[1.5rem]">人數</p>
              <div class="flex items-center">
                <button @click="tempRoomStore.decreasePeopleNum()" class="rounded-full border w-[56px] h-[56px] flex items-center justify-center">
                  <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H5V11H19V13Z" fill="black" />
                  </svg>
                </button>
                <span class="text-[1.25rem] mx-[16px] w-[16px] text-center">{{ tempRoomStore.peopleNum }}</span>
                <button @click="tempRoomStore.increasePeopleNum()" class="rounded-full border w-[56px] h-[56px] flex items-center justify-center">
                  <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black" />
                  </svg>
                </button>
              </div>
            </div>
            <p class="text-[1.5rem] text-[#BF9D7D] mb-[40px]">NT$ {{ formatPrice(room?.price) }}</p>
            <ClickButton @click="tempRoomStore.makeOrder(room)" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]">立即預訂</ClickButton>
          </aside>
        </div>
      </section>
    </main>
    <template v-if="!calendarStore.isShow">
      <div v-if="calendarStore.step!=3"     
        class="fixed lg:hidden bottom-0 w-full p-[12px] bg-[#FFFFFF] flex justify-between items-center border-[#ECECEC] border-[1px]"
      >
        <p class="text-[0.875rem] text-[#4B4B4B]">NT$ {{ formatPrice(room?.price) }} / 晚</p>
        <div class="w-full max-w-[194px]">
          <ClickButton @click="checkOrder(room)" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 查看可訂日期 </ClickButton>
        </div>
      </div>
      <div v-if="calendarStore.step===3"     
        class="fixed lg:hidden bottom-0 w-full p-[12px] bg-[#FFFFFF] flex justify-between items-center border-[#ECECEC] border-[1px]"
      >
        <div>
          <p class="text-[0.875rem] text-[#4B4B4B] mb-[4px]">NT$ {{ formatPrice(room?.price) }} / 16 晚 / {{ tempRoomStore.room?.maxPeople }} 人</p>
          <p @click="calendarStore.reSelect()" class="underline underline-offset-4 text-[0.75rem] text-[#4B4B4B]">12 / 11 - 12 / 27</p>
        </div>        
        <div class="w-full max-w-[194px]">
          <ClickButton @click="tempRoomStore.makeOrder(room)" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 立即預訂 </ClickButton>
        </div>
      </div>
    </template>    
    <Modal>
      <template #title> 預訂狀態 </template>
      <template #content>        
        <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.errorStatusCode }} <template v-if="modalStore.errorStatusCode">：</template> {{ modalStore.msg }}
        </p>
        <template v-if="modalStore.step===1">
          <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-full mr-[16px]">
              <ClickButton @click="modalStore.closeModal();router.push({name: 'Book'})" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
          </div>
        </template>
        <template v-else-if="modalStore.step===0">
          <svg class="checkmark error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_error" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" stroke-linecap="round" fill="none" d="M16 16 36 36 M36 16 16 36"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-full mr-[16px]">
              <ClickButton @click="modalStore.closeModal();" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
          </div>
        </template>        
      </template>
    </Modal>
    <Modal v-if="modalStore.option==='status'">
      <template #title> 登入狀態 </template>
      <template #content>
        <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.errorStatusCode }} <template v-if="modalStore.errorStatusCode">：</template> {{ modalStore.msg }}
        </p>
        <svg class="checkmark error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_error" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" stroke-linecap="round" fill="none" d="M16 16 36 36 M36 16 16 36"/></svg>     
        <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
          <div class="w-full mr-[16px]">
            <ClickButton @click="modalStore.closeModal();router.push({name: 'Login'})" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
              關閉視窗
            </ClickButton>
          </div>
        </div>
      </template>
    </Modal>
    <Modal v-if="modalStore.option==='network'">
      <template #title> 網路狀態 </template>
      <template #content>
        <p class="text-[#4B4B4B] mt-[50px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.errorStatusCode }} <template v-if="modalStore.errorStatusCode">：</template> {{ modalStore.msg }}
        </p>
        <svg class="checkmark error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_error" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" stroke-linecap="round" fill="none" d="M16 16 36 36 M36 16 16 36"/></svg>     
        <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
          <div class="w-full mr-[16px]">
            <ClickButton @click="modalStore.closeModal();" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
              關閉視窗
            </ClickButton>
          </div>
        </div>
      </template>
    </Modal>
    <Calendar></Calendar>
    <Loading></Loading>
    <BackgroundMask></BackgroundMask>
    <Footer></Footer>
  </div>
</template>
<style scoped>
:deep(.pagination-wrapper) {
  position: absolute;
  width: 100%;
  bottom: 23px;
  z-index: 30;
}
:deep(.pagination-page) {
  width: 32px;
  height: 4px;
  border-radius: 20px;
  background: #ffffff !important;
  margin: 0 4px;
}
:deep(.pagination-page.is-active) {
  background: #bf9d7d !important;
  width: 60px;
}
@media (max-width: 1023px) {
  :deep(.splide__pagination) {
    justify-content: start;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { apiGetRoomsDetail } from '@/api/rooms';
import { useCalendarStore } from '@/stores/calendar'
import { useModalStore } from '@/stores/modal'
import { useTempRoomStore } from '@/stores/tempRoom'
import { useRouter, useRoute } from 'vue-router'
import { useCommon } from '@/composables/useCommon';
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import '@splidejs/splide/css/core'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ClickButton from '@/components/ClickButton.vue'
import Modal from '@/components/Modal.vue'
import Calendar from '@/components/Calendar.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import BasicInfo from '@/components/BasicInfo.vue'
import DecoTitle from '@/components/DecoTitle.vue'
import CheckItem from '@/components/CheckItem.vue'
const { formatPrice } = useCommon();
const calendarStore = useCalendarStore()
const modalStore = useModalStore()
const tempRoomStore = useTempRoomStore()
const router = useRouter()
const route = useRoute()
const room = ref(
  {
    "_id": "",
    "name": "",
    "description": "",
    "imageUrl": "",
    "imageUrlList": [],
    "areaInfo": "",
    "bedInfo": "",
    "maxPeople": 0,
    "price": 0,
    "status": 1,
    "facilityInfo": [],
    "amenityInfo": [],
    "createdAt": "",
    "updatedAt": ""
  }
)
const extensions = ref({ Grid })
const clickedDate = ref(false)
const options = reactive({
  type: 'loop',
  height: '600px',
  arrows: false,
  perPage: 2,
  perMove: 1,
  gap: '8px',
  grid: {
    // [rows, cols]
    dimensions: [
      [1, 1],
      [2, 2]
    ],
    gap: {
      row: '8px',
      col: '8px'
    }
  },
  breakpoints: {
    1023: {
      perPage: 1,
      grid: false,
      classes: {
        pagination: 'splide__pagination pagination-wrapper',
        page: 'splide__pagination__page pagination-page'
      },
      height: '350px'
    },
    639: {
      height: '240px'
    }
  }
})

const checkOrder = (obj) => {
  // tempRoomStore.room = obj
  calendarStore.step = 1
  calendarStore.openCalendar()
}

// const makeOrder = async() => {
//   tempRoomStore.room = room.value
//   // console.log('tempRoomStore.room', tempRoomStore.room)
//   router.push({
//     name: 'Book'
//   })
//   // console.log('makeOrder')
//   // msg.value = ''
//   // errorStatusCode.value = ''
//   // try {
//   //   await tempRoomStore.storeGetRoomsDetail(route.params.id)    
//   // } catch(error) {
//   //   console.log('error!')
//   //   modalStore.step.value = 0
//   //   errorStatusCode.value = error.status
//   //   msg.value = error.response.data.message
//   // }
//   // modalStore.openModal()
// }
// const decreasePeopleNum = () => {
//   if (tempRoomStore.peopleNum > 1) {
//     tempRoomStore.peopleNum--
//   }
// }

// const increasePeopleNum = () => {
//   if (tempRoomStore.peopleNum < room.value.maxPeople) {
//     tempRoomStore.peopleNum++
//   }
// }

onMounted(async() => {
  try {
    const res = await apiGetRoomsDetail(route.params.id)
    // console.log('route.params.id',route.params.id)
    if (res.data.status) { 
      room.value = res.data.result
      tempRoomStore.room = room.value
    } else {
      console.error('apiGetRoomsDetail 未知錯誤')
    }
  } catch(error) {
    console.error(error)
    if(error.code === 'ECONNABORTED') {
      modalStore.option = 'network'
      modalStore.errorStatusCode = '' 
      modalStore.msg = '連線逾時，請稍後再試'
    } else if (error.code === 'ERR_NETWORK'){
      modalStore.option = 'network'
      modalStore.errorStatusCode = '' 
      modalStore.msg = '請檢查網路連線'
    } else {
      modalStore.errorStatusCode = error.status
      modalStore.msg = error.response.data.message
    }
    modalStore.openModal()
    router.push({name: 'Error'})
  }
})
</script>
