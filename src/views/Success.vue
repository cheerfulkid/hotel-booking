<template>
 <div class="min-h-[100%]">
  <Header></Header>
  <main>
   <section class="bg-[#140F0A] pt-[112px] md:pt-[240px]">
    <div class="max-w-[1296px] mx-auto md:flex items-start px-[12px]">
     <div class="w-full max-w-[746px] md:pr-[16px] lg:pr-[72px] mb-[60px] md:mb-0">
      <div class="md:flex mb-[32px] md:mb-[40px] md:flex-wrap ">
       <div class="w-[56px] h-[56px] bg-[#52DD7E] rounded-full flex items-center justify-center mr-[40px] mb-[16px] md:mb-0">
        <img class="w-[40px] h-[40px]" :src="`${ic_check}`" alt="">
       </div>
       <h3 class="text-[2rem] md:text-[2rem] lg:text-[3rem] font-bold text-[#FFFFFF]">恭喜，Jessica！<br>您已預訂成功</h3>
      </div>
      <p class="text-[#FFFFFF]">我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
      <DivideLine customClass="bg-[#ECECEC] my-[40px] md:my-[80px]"></DivideLine>
      <h6 class="text-[1rem] md:text-[1.5rem] font-bold mb-[24px] md:mb-[40px] text-[#FFFFFF]">立即查看您的訂單紀錄</h6>
      <div class="max-w-full lg:max-w-[218px]">
       <ClickButton customClass="bg-[#BF9D7D]" :to="{ name: 'BookDetail' }">
        前往我的訂單
       </ClickButton>
      </div>
      <DivideLine customClass="bg-[#ECECEC] my-[40px] md:my-[80px]"></DivideLine>
      <h6 class="text-[1.5rem] font-bold mb-[32px] md:mb-[40px] text-[#FFFFFF] ">訂房人資訊</h6>
      <p class="text-[#FFFFFF] mb-[8px] text-[#FFFFFF]">姓名</p>
      <p class="text-[#FFFFFF] font-bold mb-[24px] text-[#FFFFFF]">Jessica Wang</p>
      <p class="text-[#FFFFFF] mb-[8px] text-[#FFFFFF]">手機號碼</p>
      <p class="text-[#FFFFFF] font-bold mb-[24px] text-[#FFFFFF]">+886 912 345 678</p>
      <p class="text-[#FFFFFF] mb-[8px] text-[#FFFFFF]">電子信箱</p>
      <p class="text-[#FFFFFF] font-bold text-[#FFFFFF]">jessica@sample.com</p>
     </div>     
     <aside class="p-[16px] md:p-[40px] bg-[#FFFFFF] rounded-xl w-full md:max-w-[478px] sticky top-[120px]">
      <p class="mb-[8px] text-[0.875rem] md:text-[1rem] text-[#4B4B4B]">預訂參考編號： HH2302183151222</p>
      <p class="text-[1rem] md:text-[1.5rem] font-bold mb-[24px] md:mb-[40px]">即將來的行程</p>
      <div class="max-w-full md:max-w-[398px] mb-[24px] md:mb-[40px]">
       <img class="rounded-lg" :src="`${room2_1}`" alt="">
      </div>  
      <p class="text-[#4B4B4B] text-[0.875rem] md:text-[1.25rem] flex items-center mb-[24px] font-bold">尊爵雙人房，1 晚<span class="bg-[#909090] w-[1px] h-full inline-block mx-[16px]"></span>住宿人數：2 位</p>
      <DecoTitle customClass="mb-[8px] before:bg-[#BF9D7D] text-[0.875rem] md:text-[1rem]">入住：6 月 10 日星期二，15:00 可入住</DecoTitle>
      <DecoTitle customClass="before:bg-[#909090] mb-[24px] text-[0.875rem] md:text-[1rem]">退房：6 月 11 日星期三，12:00 前退房</DecoTitle>
      <p class="font-bold text-[#4B4B4B] text-[0.875rem] md:text-[1rem]">NT$ 10,000</p>
      <DivideLine customClass="bg-[#ECECEC] my-[24px] md:my-[40px]"></DivideLine>
      <DecoTitle customClass="mb-[24px] before:bg-[#BF9D7D] text-[0.875rem] md:text-[1rem]">房內設備</DecoTitle>
      <div class="w-full grid grid-cols-2 xl:grid-cols-3 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center border-[1px] rounded-lg mb-[24px] md:mb-[40px]">
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
      <div class="w-full grid grid-cols-2 xl:grid-cols-3 gap-[8px] auto-cols-auto px-[24px] py-[24px] items-center border-[1px] rounded-lg mb-0 md:mb-[40px]">
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
     </aside>
    </div>
    <img class="block md:hidden mt-[40px] md:mt-[120px]" :src="mobile_line2" alt="">
    <img class="hidden md:block mt-[40px] md:mt-[120px]" :src="line2" alt="">
   </section>
  </main>
  <Footer></Footer>
 </div> 
</template>
<style scoped>
</style>
<script setup lang="ts">
import { ref, computed } from "vue";
// import type { Login } from "../types/login"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ic_check from '../assets/img/svg/ic_check.svg';
import room2_1 from '../assets/img/pc/room2-1.png';
import mobile_line2 from '../assets/img/mobile/line.png';
import line2 from '../assets/img/pc/line2.png';
import DivideLine from '../components/DivideLine.vue';
import ClickButton from '../components/ClickButton.vue';
import DecoTitle from '../components/DecoTitle.vue';
import CheckItem from '../components/CheckItem.vue';

// const loading = ref(false)
// const loginData = ref<Login>({
//  email: "",
//  password: ""
// })

</script>