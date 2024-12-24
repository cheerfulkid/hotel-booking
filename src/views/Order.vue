<template>
  <div class="md:flex md:items-start">
    <div class="w-full max-w-full md:max-w-[730px] md:mr-[40px] bg-[#FFFFFF] rounded-lg p-[16px] lg:p-[40px] mb-[24px] md:mb-0">
      <p class="mb-[8px] text-[0.875rem] md:text-[1rem] text-[#4B4B4B]">預訂參考編號： HH2302183151222</p>
      <p class="text-[1rem] md:text-[1.5rem] font-bold mb-[24px] md:mb-[40px]">即將來的行程</p>
      <img
        class="w-full max-w-full md:max-w-full h-[240px] object-cover object-left-bottom mb-[24px] md:mb-[40px] rounded-lg"
        :src="`${room2_1}`"
        alt=""
      />
      <p class="text-[#4B4B4B] text-[0.875rem] md:text-[1.25rem] flex items-center mb-[24px] font-bold">
        尊爵雙人房，1 晚<span class="bg-[#909090] w-[1px] h-full inline-block mx-[16px]"></span>住宿人數：2 位
      </p>
      <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D] text-[0.875rem] md:text-[1rem]"
        >入住：6 月 10 日星期二，15:00 可入住</DecoTitle
      >
      <DecoTitle customClass="before:bg-[#909090] mb-[24px] text-[0.875rem] md:text-[1rem]"
        >退房：6 月 11 日星期三，12:00 前退房</DecoTitle
      >
      <p class="font-bold text-[#4B4B4B] text-[0.875rem] md:text-[1rem]">NT$ 10,000</p>
      <DivideLine customClass="bg-[#ECECEC] my-[24px] md:my-[40px]"></DivideLine>
      <DecoTitle customClass="mb-[24px] before:bg-[#BF9D7D] text-[0.875rem] md:text-[1rem]">房內設備</DecoTitle>
      <div
        class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center border-[1px] rounded-lg mb-[24px] md:mb-[40px]"
      >
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">電視</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">吹風機</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">熱水壺</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">衣櫃</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">除濕機</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">書桌</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">冰箱</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">浴缸</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">檯燈</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">音響</CheckItem>
      </div>
      <DecoTitle customClass="mb-[24px] before:bg-[#BF9D7D] text-[0.875rem] md:text-[1rem]">備品提供</DecoTitle>
      <div
        class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center border-[1px] rounded-lg mb-[24px] md:mb-[40px]"
      >
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">衛生紙</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">沐浴用品</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">刮鬍刀</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">吊衣架</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">刷牙用品</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">梳子</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">拖鞋</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">清潔用品</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">罐裝水</CheckItem>
        <CheckItem customClass="text-[0.875rem] md:text-[1rem]">浴巾</CheckItem>
      </div>
      <div class="flex">
        <div class="w-[50%] mr-[16px]">
          <ClickButton @click="cancelOrder()" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
            取消預訂
          </ClickButton>
        </div>
        <div class="w-[50%]">
          <ClickButton customClass="bg-[#BF9D7D] text-[#FFFFFF]" :to="{ name: 'HotelDetail' }"> 查看詳情 </ClickButton>
        </div>
      </div>
    </div>
    <div class="w-full max-w-full md:max-w-[527px] bg-[#FFFFFF] mb-[24px] md:mb-0 rounded-lg p-[16px] lg:p-[40px]">
      <p class="text-[1rem] md:text-[1.5rem] font-bold mb-[24px] md:mb-[40px]">歷史訂單</p>
      <div class="lg:flex">
        <img class="w-[120px] h-[80px] rounded-lg object-cover mr-[24px] mb-[24px] lg:mb-0" :src="`${room_detail3}`" alt="" />
        <div>
          <p class="mb-[16px] text-[0.875rem] md:text-[1rem] text-[#4B4B4B]">預訂參考編號： HH2302183151222</p>
          <p class="text-[#4B4B4B] text-[0.875rem] md:text-[1.25rem] flex items-center mb-[16px] font-bold">尊爵雙人房</p>
          <p class="text-[#4B4B4B] mb-[8px]">住宿天數：1 晚</p>
          <p class="text-[#4B4B4B] mb-[16px]">住宿人數：2 位</p>
          <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D] text-[#4B4B4B] text-[0.875rem] md:text-[1rem]"
            >入住：6 月 10 日星期二，15:00 可入住</DecoTitle
          >
          <DecoTitle customClass="before:bg-[#909090] mb-[24px] text-[#4B4B4B] text-[0.875rem] md:text-[1rem]"
            >退房：6 月 11 日星期三，12:00 前退房</DecoTitle
          >
          <p class="font-bold text-[#000000] text-[0.875rem] md:text-[1rem]">NT$ 10,000</p>
        </div>
      </div>
      <DivideLine customClass="bg-[#ECECEC] my-[24px] md:my-[40px]"></DivideLine>
      <div class="lg:flex">
        <img class="w-[120px] h-[80px] rounded-lg object-cover mr-[24px] mb-[24px] lg:mb-0" :src="`${room_detail3}`" alt="" />
        <div>
          <p class="mb-[16px] text-[0.875rem] md:text-[1rem] text-[#4B4B4B]">預訂參考編號： HH2302183151222</p>
          <p class="text-[#4B4B4B] text-[0.875rem] md:text-[1.25rem] flex items-center mb-[16px] font-bold">尊爵雙人房</p>
          <p class="text-[#4B4B4B] mb-[8px]">住宿天數：1 晚</p>
          <p class="text-[#4B4B4B] mb-[16px]">住宿人數：2 位</p>
          <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D] text-[#4B4B4B] text-[0.875rem] md:text-[1rem]"
            >入住：6 月 10 日星期二，15:00 可入住</DecoTitle
          >
          <DecoTitle customClass="before:bg-[#909090] mb-[24px] text-[#4B4B4B] text-[0.875rem] md:text-[1rem]"
            >退房：6 月 11 日星期三，12:00 前退房</DecoTitle
          >
          <p class="font-bold text-[#000000] text-[0.875rem] md:text-[1rem]">NT$ 10,000</p>
        </div>
      </div>
      <DivideLine customClass="bg-[#ECECEC] my-[24px] md:my-[40px]"></DivideLine>
      <div class="lg:flex">
        <img class="w-[120px] h-[80px] rounded-lg object-cover mr-[24px] mb-[24px] lg:mb-0" :src="`${room_detail3}`" alt="" />
        <div>
          <p class="mb-[16px] text-[0.875rem] md:text-[1rem] text-[#4B4B4B]">預訂參考編號： HH2302183151222</p>
          <p class="text-[#4B4B4B] text-[0.875rem] md:text-[1.25rem] flex items-center mb-[16px] font-bold">尊爵雙人房</p>
          <p class="text-[#4B4B4B] mb-[8px]">住宿天數：1 晚</p>
          <p class="text-[#4B4B4B] mb-[16px]">住宿人數：2 位</p>
          <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D] text-[#4B4B4B] text-[0.875rem] md:text-[1rem]"
            >入住：6 月 10 日星期二，15:00 可入住</DecoTitle
          >
          <DecoTitle customClass="before:bg-[#909090] mb-[24px] text-[#4B4B4B] text-[0.875rem] md:text-[1rem]"
            >退房：6 月 11 日星期三，12:00 前退房</DecoTitle
          >
          <p class="font-bold text-[#000000] text-[0.875rem] md:text-[1rem]">NT$ 10,000</p>
        </div>
      </div>
      <ClickButton
        customClass="mt-[40px] border-[1px] border-[#BF9D7D] text-[#BF9D7D] flex items-center justify-center"
        :to="{ name: 'AllHotel' }"
      >
        查看更多
        <svg class="mr-[4px] w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_14_2286)">
            <path
              class="fill-[#BF9D7D]"
              d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_14_2286">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </ClickButton>
    </div>
  </div>
  <Modal v-if="modalStore.option==='cancel'">
    <template #title> 取消預訂 </template>
    <template #content>      
      <template v-if="modalStore.step===0">
        <p class="text-[#4B4B4B] h-[224px] flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
          {{ modalStore.msg }}
        </p>
        <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
          <div class="w-[50%] mr-[16px]">
            <ClickButton @click="modalStore.closeModal" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
              關閉視窗
            </ClickButton>
          </div>
          <div class="w-[50%]">
            <ClickButton @click="makeCancel()" isLink="false" customClass="bg-[#BF9D7D] text-[#FFFFFF]"> 確定取消 </ClickButton>
          </div>
        </div>
      </template>
      <template v-else-if="modalStore.step===1">
        <template v-if="modalStore.status===1">
          <p class="text-[#4B4B4B] px-[18px] mt-[50px] text-center flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
            {{ modalStore.msg }}
          </p>
          <svg class="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle_success" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round"/></svg>
          <div class="flex w-full p-[12px] border-t-[1px] border-[#ECECEC]">
            <div class="w-full mr-[16px]">
              <ClickButton @click="modalStore.closeModal();router.go(0)" isLink="false" customClass="border-[1px] border-[#BF9D7D] text-[#BF9D7D]">
                關閉視窗
              </ClickButton>
            </div>
          </div>
        </template>
        <template v-else-if="modalStore.status===0">
          <p class="text-[#4B4B4B] px-[18px] mt-[50px] text-center flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
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
      </template>        
    </template>
  </Modal>
  <Modal v-if="modalStore.option!=='cancel'">
    <template #title> 撈取全部訂單 </template>
    <template #content>        
      <p class="text-[#4B4B4B] px-[18px] mt-[50px] text-center flex items-center text-[0.875rem] md:text-[1.25rem] font-bold">
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
</template>
<style scoped></style>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { apiGetOrdersAll, apiDeleteOrdersDetail } from '@/api/orders';
import { useModalStore } from '@/stores/modal'
import { useOrderStore } from '@/stores/order'
import { useRouter, useRoute } from 'vue-router'
import room2_1 from '@/assets/img/pc/room2-1.png'
import room_detail3 from '@/assets/img/pc/room_detail3.png'
import Modal from '@/components/Modal.vue'
import BackgroundMask from "@/components/BackgroundMask.vue";
import Loading from "@/components/Loading.vue";
import ClickButton from '@/components/ClickButton.vue'
import InputText from '@/components/InputText.vue'
import DivideLine from '@/components/DivideLine.vue'
import DecoTitle from '@/components/DecoTitle.vue'
import CheckItem from '@/components/CheckItem.vue'
import InputSelectBind from '@/components/InputSelectBind.vue'
import taiwanCityData from '@/api/taiwanCityData.json'
const modalStore = useModalStore()
const orderStore = useOrderStore()
const router = useRouter()
const route = useRoute()
const cityName = ref('')
const years = ref<number[]>([])
const months = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
const currentDate = ref(new Date())
const signupData = ref<Signup>({
  name: '',
  email: '',
  password: '',
  phone: '',
  birthday: '',
  address: {
    zipcode: '',
    detail: ''
  }
})
const currentYear = computed(() => {
  return currentDate.value.getFullYear()
})
const birthYear = ref(currentYear.value)
const birthMonth = ref(1)
const birthDay = ref(1)
const allOrders = ref()
const lastDayOfMonth = computed(() => {
  return new Date(birthYear.value, birthMonth.value, 0).getDate()
})
signupData.value.birthday = `${birthYear.value}/${birthMonth.value}/${birthDay.value}`
const generateYearRange = () => {
  const startYear = currentYear.value - 100
  const endYear = currentYear.value
  for (let year = startYear; year <= endYear; year++) {
    years.value.push(year)
  }
}

const cancelOrder = () => {
  modalStore.option = 'cancel'
  modalStore.status = 0
  modalStore.step = 0
  modalStore.msg = '確定要取消此房型的預訂嗎？'
  modalStore.openModal()
}

const makeCancel = async() => {
  try {   
    const res = await apiDeleteOrdersDetail(allOrders.value[allOrders.value.length-1]._id)
    if (res.data.status) { 
      modalStore.status = 1
      modalStore.step = 1
      modalStore.msg = '取消訂單成功！'
    } else {
      modalStore.status = 0
      modalStore.step = 1
      modalStore.errorStatusCode = ''
      modalStore.msg = 'apiDeleteOrdersDetail 未知錯誤'
      console.error('apiDeleteOrdersDetail 未知錯誤')
    }    
  } catch(error) {
    if(error.code === 'ECONNABORTED') {
      modalStore.status = 0
      modalStore.step = 1
      modalStore.errorStatusCode = '' 
      modalStore.msg = '連線逾時，請稍後再試'
    } else if (error.code === 'ERR_NETWORK'){
      modalStore.status = 0
      modalStore.step = 1
      modalStore.errorStatusCode = '' 
      modalStore.msg = '請檢查網路連線'
    } else {
      modalStore.status = 0
      modalStore.step = 1
      modalStore.errorStatusCode = error.status
      modalStore.msg = error.response.data.message
    }    
  }
  modalStore.openModal()
}

const areaList = computed(() => {
  let city = taiwanCityData.find((item) => item.CityName === cityName.value)
  return city?.AreaList
})

onMounted(async() => {
  generateYearRange()
  try {
    const res = await apiGetOrdersAll()
    if (res.data.status) { 
      allOrders.value = res.data.result
    } else {
      console.error('apiGetOrdersAll 未知錯誤', res)
    }        
  } catch(error) {
    console.error(error)
  }  
})
// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })
</script>
