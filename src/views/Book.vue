<template>
  <div class="min-h-[100%]">
    <Header></Header>
    <main>
      <section class="bg-[#F7F2EE] pt-[112px] md:pt-[240px] pb-[40px]">
        <div class="max-w-[1296px] mx-auto md:flex items-start px-[12px]">
          <div class="w-full max-w-[746px] md:pr-[16px] lg:pr-[72px]">
            <div class="flex items-center mb-[40px]">
              <button class="mr-[8px]">
                <svg
                  class="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14_2307)">
                    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_2307">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <h5 class="text-[1.5rem] md:text-[2rem] font-bold">確認訂房資訊</h5>
            </div>
            <h6 class="text-[1.25rem] md:text-[1.75rem] font-bold mb-[32px] md:mb-[40px]">訂房資訊</h6>
            <div class="flex items-center justify-between">
              <div>
                <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D]">選擇房型</DecoTitle>
                <p class="mb-[24px]">尊爵雙人房</p>
              </div>
              <router-link class="underline underline-offset-1 font-bold">編輯</router-link>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D]">訂房日期</DecoTitle>
                <p class="mb-[8px]">入住：12 月 4 日星期二</p>
                <p class="mb-[24px]">退房：12 月 6 日星期三</p>
              </div>
              <router-link class="underline underline-offset-1 font-bold">編輯</router-link>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D]">房客人數</DecoTitle>
                <p>2 人</p>
              </div>
              <router-link class="underline underline-offset-1 font-bold">編輯</router-link>
            </div>
            <DivideLine customClass="bg-[#909090] my-[40px] md:my-[47px]"></DivideLine>
            <div class="flex items-center justify-between mb-[40px]">
              <h5 class="text-[1.25rem] md:text-[2rem] font-bold">訂房人資訊</h5>
              <button class="text-[#BF9D7D] font-bold underline underline-offset-1">套用會員資料</button>
            </div>
            <form action="">
              <div class="mb-[24px]">
                <label class="text-[0.875rem] md:text-[1rem] font-bold mb-[8px] block" for="">姓名</label>
                <InputText v-model="bookData.userInfo.name" placeholder="請輸入姓名"></InputText>
              </div>
              <div class="mb-[24px]">
                <label class="text-[0.875rem] md:text-[1rem] font-bold mb-[8px] block" for="">手機號碼</label>
                <InputText v-model="bookData.userInfo.phone" placeholder="請輸入手機號碼"></InputText>
              </div>
              <div class="mb-[24px]">
                <label class="text-[0.875rem] md:text-[1rem] font-bold mb-[8px] block" for="">電子信箱</label>
                <InputText v-model="bookData.userInfo.email" placeholder="請輸入電子信箱"></InputText>
              </div>
              <div class="mb-[24px]">
                <label class="text-[0.875rem] md:text-[1rem] font-bold mb-[8px] block" for="">地址</label>
                <div class="flex">
                  <div class="w-1/2 pr-[8px]">
                    <InputSelectBind
                      customClass="border-[1px] border-[#ECECEC]"
                      :data="taiwanCityData"
                      propertyValue="CityName"
                      property="CityName"
                      v-model:name="cityName"
                    ></InputSelectBind>
                  </div>
                  <div class="w-1/2">
                    <InputSelectBind
                      customClass="border-[1px] border-[#ECECEC]"
                      :data="areaList"
                      propertyValue="ZipCode"
                      property="AreaName"
                      v-model:name="bookData.userInfo.address.zipcode"
                    ></InputSelectBind>
                  </div>
                </div>
                <!-- <InputText placeholder="請選擇縣市" customClass="max-w-[369px] mr-[8px]"></InputText>
        <InputText placeholder="請選擇區域" customClass="max-w-[369px]"></InputText> -->
                <InputText v-model="bookData.userInfo.address.detail" placeholder="請輸入詳細地址" customClass="mt-[16px]"></InputText>
              </div>
              <DivideLine customClass="bg-[#909090] my-[40px] md:my-[47px]"></DivideLine>
              <h5 class="text-[1.25rem] md:text-[2rem] font-bold mb-[32px] md:mb-[40px]">房間資訊</h5>
              <div class="mb-[24px]">
                <DecoTitle customClass="mb-[24px] md:text-[1.5rem] before:bg-[#BF9D7D]">房型基本資訊</DecoTitle>
                <BasicInfo roomSize="24" bedCount="1" peopleCount="2-4"></BasicInfo>
              </div>
              <div class="mb-[24px]">
                <DecoTitle customClass="mb-[24px] md:text-[1.5rem] before:bg-[#BF9D7D]">房間格局</DecoTitle>
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
              <div class="mb-[24px]">
                <DecoTitle customClass="mb-[24px] md:text-[1.5rem] before:bg-[#BF9D7D]">房內設備</DecoTitle>
                <div
                  class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg"
                >
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">平面電視</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">吹風機</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">冰箱</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">熱水壺</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">檯燈</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">衣櫃</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">除濕機</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">浴缸</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">書桌</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">音響</CheckItem>
                </div>
              </div>
              <div class="mb-[24px]">
                <DecoTitle customClass="mb-[24px] md:text-[1.5rem] before:bg-[#BF9D7D]">備品提供</DecoTitle>
                <div
                  class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg"
                >
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">衛生紙</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">拖鞋</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">沐浴用品</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">清潔用品</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">刮鬍刀</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">吊衣架</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">浴巾</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">刷牙用品</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">罐裝水</CheckItem>
                  <CheckItem customClass="text-[0.875rem] md:text-[1rem]">梳子</CheckItem>
                </div>
              </div>
            </form>
          </div>
          <aside class="p-[40px] bg-[#FFFFFF] rounded-xl w-full md:max-w-[478px] sticky top-[120px]">
            <div class="max-w-full md:max-w-[398px] mb-[40px]">
              <img class="rounded-lg" :src="`${room2_1}`" alt="" />
            </div>
            <h6 class="text-[1.25rem] md:text-[1.75rem] font-bold mb-[24px]">價格詳情</h6>
            <div class="flex mb-[12px] items-center justify-between">
              <div class="flex items-center">
                <span>NT$ 10,000</span>
                <img class="w-[16px]" :src="`${ic_close}`" alt="" />
                <span>2 晚</span>
              </div>
              <p>NT$ 20,000</p>
            </div>
            <div class="flex mb-[24px] items-center justify-between">
              <span>住宿折扣</span>
              <span class="text-[#BF9D7D]">-NT$ 1,000</span>
            </div>
            <DivideLine customClass="bg-[#ECECEC] my-[24px]"></DivideLine>
            <div class="flex justify-between items-center mb-[40px]">
              <span class="font-bold">總價</span>
              <span class="font-bold">NT$ 19,000</span>
            </div>
            <ClickButton @click="checkOrder()" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 確認訂房 </ClickButton>
            <!-- <button @click="checkOrder()"> TEST CHECK</button> -->
          </aside>
        </div>
      </section>
    </main>
    <Modal v-if="modalStore.option==='order'">
      <template #title> 訂房狀態 </template>
      <template #content>        
        <p class="text-[#4B4B4B] px-[18px] mt-[50px] text-center flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.errorStatusCode }} <template v-if="modalStore.errorStatusCode">：</template> {{ modalStore.msg }}
        </p>
        <template v-if="modalStore.status===1">
          <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-full mr-[16px]">
              <ClickButton @click="modalStore.closeModal();router.push({name: 'Success'})" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
          </div>
        </template>
        <template v-else-if="modalStore.status===0">
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
    <Loading></Loading>
    <BackgroundMask></BackgroundMask>
    <Footer></Footer>
    <!-- <LoadingOrder v-if="orderLoading"></LoadingOrder> -->
  </div>
</template>
<style scoped></style>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useModalStore } from '@/stores/modal'
import { useOrderStore } from '@/stores/order'
import { useTempRoomStore } from '@/stores/tempRoom'
import { useUserStore } from '@/stores/user'
import { useRouter, useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import room2_1 from '@/assets/img/pc/room2-1.png'
import ic_close from '@/assets/img/svg/ic_close.svg'
import LoadingOrder from '@/components/LoadingOrder.vue'
import ClickButton from '@/components/ClickButton.vue'
import InputText from '@/components/InputText.vue'
import CheckItem from '@/components/CheckItem.vue'
import BasicInfo from '@/components/BasicInfo.vue'
import DecoTitle from '@/components/DecoTitle.vue'
import DivideLine from '@/components/DivideLine.vue'
import InputSelectBind from '@/components/InputSelectBind.vue'
import taiwanCityData from '@/api/taiwanCityData.json'
const modalStore = useModalStore()
const orderStore = useOrderStore()
const tempRoomStore = useTempRoomStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const cityName = ref('')
const orderLoading = ref(false)
const bookData = ref({
  'roomId': tempRoomStore.room?.id,
  'checkInDate': '2023/06/18',
  'checkOutDate': '2023/06/19',
  'peopleNum': 2,
  'userInfo': {
    'address': {
      'zipcode': '',
      'detail': userStore.userInfo?.address?.detail
    },
    'name': userStore.userInfo?.name,
    'phone': userStore.userInfo?.phone,
    'email': userStore.userInfo?.email
  }
})
const areaList = computed(() => {
  let city = taiwanCityData.find((item) => item.CityName === cityName.value)
  return city?.AreaList
})
const checkOrder = async() => {
  modalStore.msg = ''
  modalStore.errorStatusCode = ''
  await orderStore.storePostOrders(bookData.value)
  // orderLoading.value = true
  // setTimeout(() => {
  //   router.push({
  //     name: 'Success'
  //   })
  // }, 1500)
  // console.log('modalStore:', modalStore);
  // console.log('modalStore.isShow', modalStore.isShow)
  // useModal 時好時壞...
  // 打印 modalStore 印出全部項目時 modalStore.openModal 就可以正常運作
  // modalStore.openModal()
}

// const updateCityAndArea = (zipcode) => {
//   console.log('updateCityAndArea')
//   for (const city of taiwanCityData) {
//     for (const area of city.AreaList) {
//       if (area.ZipCode === zipcode) {
//         cityName.value = city.CityName
//         areaList.value = city.AreaList
//         console.log('cityName.value',cityName.value)
//         console.log('areaList.value',areaList.value)
//         return
//       }
//     }
//   }
// }

// watch(() => bookData.value.userInfo.address.zipcode, (newZipcode) => {
//   console.log('watch newZipcode', newZipcode)
//   if (newZipcode) {
//     updateCityAndArea(newZipcode)
//   }
// })

// watch(bookData.value.userInfo.address.zipcode, (newZipcode) => {
//   console.log('watch newZipcode', newZipcode)
//   // for (const city of taiwanCityData) {
//   //   const area = city.Areas.find(area => area.ZipCode === newZipcode)
//   //   if (area) {
//   //     cityName.value = city.CityName
//   //     return
//   //   }
//   // }
// })

// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })
// onMounted(async() => {
  // console.log('!tempRoomStore.room',!tempRoomStore.room)
if(!tempRoomStore.room) {
  // console.log('true')
  router.push({
    name: 'AllHotel'
  })
} 

// onMounted(() => {
//   if (userStore.userInfo?.address?.zipcode) {
//     console.log('has zipcode')
//     // bookData.value.userInfo.address.zipcode = userStore.userInfo.address.zipcode
//     // console.log('userStore.userInfo.address.zipcode', userStore.userInfo.address.zipcode)
//     // updateCityAndArea(userStore.userInfo.address.zipcode)
//   }
// })
  // console.log('route.params.id',route.params.id)
  // const res = await apiGetRoomsDetail()
  // console.log('res', res)
  // rooms.value = res.data.result
// })
</script>
