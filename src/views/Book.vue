<template>
 <div class="min-h-[100%]">
  <Header></Header>
  <main>
   <section class="bg-[#F7F2EE] pt-[112px] md:pt-[240px] pb-[40px]">
    <div class="max-w-[1296px] mx-auto md:flex items-start px-[12px]">
     <div class="w-full max-w-[746px] md:pr-[16px] lg:pr-[72px]">
      <div class="flex items-center mb-[40px]">
       <button>
        <svg class="w-[24px] h-[24px] md:w-[40px] md:h-[40px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_14_2307)">
          <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="black"/>
         </g>
         <defs>
          <clipPath id="clip0_14_2307">
           <rect width="24" height="24" fill="white"/>
          </clipPath>
         </defs>
        </svg>
       </button>
       <h5 class="text-[1.5rem] md:text-[2rem] lg:text-[2rem] font-bold">確認訂房資訊</h5>
      </div>
      <h6 class="md:text-[1.75rem] lg:text-[1.75rem] font-bold mb-[32px] md:mb-[40px]">訂房資訊</h6>
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
       <h5 class="md:text-[2rem] lg:text-[2rem] font-bold">訂房人資訊</h5>
       <button class="text-[#BF9D7D] font-bold underline underline-offset-1">套用會員資料</button>
      </div>
      <form action="">
       <div class="mb-[24px]">
        <label class="font-bold mb-[8px] block" for="">姓名</label>
        <InputText placeholder="請輸入姓名"></InputText>
       </div>
       <div class="mb-[24px]">
        <label class="font-bold mb-[8px] block" for="">手機號碼</label>
        <InputText placeholder="請輸入手機號碼"></InputText>        
       </div>
       <div class="mb-[24px]">
        <label class="font-bold mb-[8px] block" for="">電子信箱</label>
        <InputText placeholder="請輸入電子信箱"></InputText>        
       </div>
       <div class="mb-[24px]">
        <label class="font-bold mb-[8px] block" for="">地址</label>
        <div class="flex">
          <div class="w-1/2 pr-[8px]">
            <InputSelectBind customClass="border-[1px] border-[#ECECEC]" :data="taiwanCityData" propertyValue="CityName" property="CityName" v-model:name="cityName"></InputSelectBind>      
          </div> 
          <div class="w-1/2">
            <InputSelectBind customClass="border-[1px] border-[#ECECEC]" :data="areaList" propertyValue="ZipCode" property="AreaName" v-model:name="bookData.address.zipcode"></InputSelectBind>          
          </div>
        </div>        
        <!-- <InputText placeholder="請選擇縣市" customClass="max-w-[369px] mr-[8px]"></InputText>
        <InputText placeholder="請選擇區域" customClass="max-w-[369px]"></InputText> -->
        <InputText placeholder="請輸入詳細地址" customClass="mt-[16px]"></InputText>
       </div>
       <DivideLine customClass="bg-[#909090] my-[40px] md:my-[47px]"></DivideLine>       
       <h5 class="md:text-[2rem] lg:text-[2rem] font-bold mb-[32px] md:mb-[40px]">房間資訊</h5>
       <div class="mb-[24px]">
        <DecoTitle customClass="mb-[24px] md:text-[24px] lg:text-[24px] before:bg-[#BF9D7D]">房型基本資訊</DecoTitle>
        <BasicInfo roomSize="24" bedCount="1" peopleCount="2-4"></BasicInfo>
       </div>
       <div class="mb-[24px]">
        <DecoTitle customClass="mb-[24px] md:text-[24px] lg:text-[24px] before:bg-[#BF9D7D]">房間格局</DecoTitle>
        <div class="w-full grid grid-cols-3 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg">
         <CheckItem>市景</CheckItem>
         <CheckItem>獨立衛浴</CheckItem>
         <CheckItem>客廳</CheckItem>
         <CheckItem>書房</CheckItem>
         <CheckItem>樓層電梯</CheckItem>
        </div>
       </div>
       <div class="mb-[24px]">
        <DecoTitle customClass="mb-[24px] md:text-[24px] lg:text-[24px] before:bg-[#BF9D7D]">房內設備</DecoTitle>
        <div class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg">
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
        <DecoTitle customClass="mb-[24px] md:text-[24px] lg:text-[24px] before:bg-[#BF9D7D]">備品提供</DecoTitle>
        <div class="w-full grid grid-cols-2 xl:grid-cols-5 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center bg-[#FFFFFF] rounded-lg">
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
       <img class="rounded-lg" :src="`${room2_1}`" alt="">
      </div>     
      <h6 class="md:text-[1.75rem] lg:text-[1.75rem] font-bold mb-[24px]">價格詳情</h6>
      <div class="flex mb-[12px] items-center justify-between">
       <div class="flex items-center">
        <span>NT$ 10,000</span>
        <img class="w-[16px]" :src="`${ic_close}`" alt="">
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
      <ClickButton @click="checkOrder" customClass="bg-[#BF9D7D] text-[#FFFFFF]" :to="{ name: 'Book' }">
        確認訂房
      </ClickButton>      
     </aside>
    </div>    
   </section>
  </main>
  <Footer></Footer>
  <LoadingOrder v-if="orderLoading"></LoadingOrder>
 </div> 
</template>
<style scoped>
</style>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'
// import type { Login } from "../types/login"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import room2_1 from '../assets/img/pc/room2-1.png';
import ic_close from '../assets/img/svg/ic_close.svg';
import LoadingOrder from '../components/LoadingOrder.vue';
import ClickButton from '../components/ClickButton.vue';
import InputText from '../components/InputText.vue';
import CheckItem from '../components/CheckItem.vue';
import BasicInfo from '../components/BasicInfo.vue';
import DecoTitle from '../components/DecoTitle.vue';
import DivideLine from '../components/DivideLine.vue';
import InputSelectBind from '../components/InputSelectBind.vue';
import taiwanCityData from "../api/taiwanCityData.json"
const router = useRouter()
const route = useRoute()
const cityName = ref("")
const orderLoading = ref(false)
const bookData = ref({
 name: "",
 phone: "",
 email: "",
 address: {
  zipcode: "",
  detail: ""
 }
})
const areaList = computed(() => {
 let city = taiwanCityData.find((item) => item.CityName === cityName.value)
 return city?.AreaList
})
const checkOrder = (() => {
  orderLoading.value = true
  setTimeout(() => {
    router.push({
      name: 'Success'
    })
  }, 1500);
 
})
// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })

</script>